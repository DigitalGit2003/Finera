import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
const CONTACT_TO = process.env.CONTACT_EMAIL || 'info@fineraglobal.com';

// CORS must be FIRST - before any routes
// Always include production + local defaults; CORS_ORIGINS env adds more (does not replace).
const defaultOrigins = [
  'http://localhost:3000',
  'http://localhost:5173',
  'http://localhost:5174',
  'http://127.0.0.1:3000',
  'http://127.0.0.1:5173',
  'https://www.fineraglobal.com',
  'https://fineraglobal.com',
];

const allowedOrigins = [
  ...new Set([
    ...defaultOrigins,
    ...(process.env.CORS_ORIGINS || '')
      .split(',')
      .map((o) => o.trim())
      .filter(Boolean),
  ]),
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow non-browser tools (no Origin) and listed frontends
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
      return;
    }
    console.warn(`⚠️  Blocked CORS origin: ${origin}`);
    // Do not throw — throwing omits CORS headers and looks like a network failure
    callback(null, false);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin'],
  exposedHeaders: ['Content-Length', 'X-JSON'],
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // ensure preflight never falls through to 404

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  service: String,
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
}, {
  collection: 'contact_submissions'
});

const Contact = mongoose.model('Contact', contactSchema);

let mongoReady = false;
const mongoUri = process.env.MONGO_URI;

if (mongoUri) {
  mongoose.connect(mongoUri)
    .then(() => {
      mongoReady = true;
      console.log('✅ MongoDB connected');
    })
    .catch(err => console.error('❌ MongoDB connection error:', err.message));
} else {
  console.log('ℹ️  MONGO_URI not set — submissions will still be emailed');
}

function createTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return null;
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
}

async function sendContactEmail({ firstName, lastName, email, service, message }) {
  const transporter = createTransporter();
  if (!transporter) {
    throw new Error(
      'SMTP is not configured. Set SMTP_HOST, SMTP_USER, and SMTP_PASS on the server. ' +
        'FormSubmit cannot be used from Render (blocked by Cloudflare).'
    );
  }

  const subject = `New consultation request from ${firstName} ${lastName}`;
  const text = [
    'New Free Consultation Request',
    '',
    `Name: ${firstName} ${lastName}`,
    `Email: ${email}`,
    `Service: ${service || 'Not specified'}`,
    '',
    'Message:',
    message,
  ].join('\n');

  const html = `
    <h2>New Free Consultation Request</h2>
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
    <p><strong>Service:</strong> ${service || 'Not specified'}</p>
    <p><strong>Message:</strong></p>
    <p>${String(message).replace(/\n/g, '<br>')}</p>
  `;

  await transporter.sendMail({
    from: process.env.SMTP_FROM || process.env.SMTP_USER || CONTACT_TO,
    to: CONTACT_TO,
    replyTo: email,
    subject,
    text,
    html,
  });
  console.log(`✅ Email sent via SMTP to ${CONTACT_TO}`);
}

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`, {
    origin: req.headers.origin,
    contentType: req.headers['content-type']
  });
  next();
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'Server is running',
    timestamp: new Date().toISOString(),
    mongodb: mongoReady ? 'connected' : 'disconnected',
    email: createTransporter() ? 'smtp' : 'not-configured',
    allowedOrigins,
  });
});

app.post('/api/contact', async (req, res) => {
  try {
    console.log('📧 Received contact form:', req.body);

    const { firstName, lastName, email, service, message } = req.body;
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'All required fields must be filled'
      });
    }

    await sendContactEmail({ firstName, lastName, email, service, message });

    let id = null;
    if (mongoReady) {
      try {
        const contact = new Contact({ firstName, lastName, email, service, message });
        await contact.save();
        id = contact._id;
        console.log('✅ Contact saved successfully:', id);
      } catch (saveErr) {
        console.error('⚠️  Email sent but MongoDB save failed:', saveErr.message);
      }
    }

    res.status(201).json({
      success: true,
      message: 'Contact submitted successfully',
      id,
    });
  } catch (err) {
    console.error('❌ Error processing contact:', err);
    res.status(500).json({
      success: false,
      error: 'Failed to send contact',
      details: err.message
    });
  }
});

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📬 Consultation emails → ${CONTACT_TO}`);
  console.log(`🌐 Allowed CORS origins: ${allowedOrigins.join(', ')}`);
  if (!createTransporter()) {
    console.log('ℹ️  SMTP not configured — contact form uses browser FormSubmit (see frontend).');
  } else {
    console.log('✉️  Email mode: SMTP');
  }
  console.log(`📝 Test with: curl http://localhost:${PORT}/api/health`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`❌ Port ${PORT} is already in use.`);
    console.error('   Stop the other process, or set a different PORT in backend/.env');
    process.exit(1);
  }
  throw err;
});
