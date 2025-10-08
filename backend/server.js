import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// CORS must be FIRST - before any routes
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    const allowedOrigins = [
      'http://localhost:3000',
      'http://localhost:5173',
      'http://localhost:5174',
      'http://127.0.0.1:3000',
      'http://127.0.0.1:5173'
    ];
    
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin'],
  exposedHeaders: ['Content-Length', 'X-JSON'],
  preflightContinue: false,
  optionsSuccessStatus: 204
}));

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Contact Schema
const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  service: String,
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
}, {
  collection: 'contact_submissions'  // Your custom collection name
});

const Contact = mongoose.model('Contact', contactSchema);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/contacts', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`, {
    origin: req.headers.origin,
    contentType: req.headers['content-type']
  });
  next();
});

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'Server is running',
    timestamp: new Date().toISOString(),
    mongodb: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
  });
});

// Contact form route
app.post('/api/contact', async (req, res) => {
  try {
    console.log('📧 Received contact form:', req.body);
    
    // Validate required fields
    const { firstName, lastName, email, message } = req.body;
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        error: 'All required fields must be filled' 
      });
    }

    const contact = new Contact(req.body);
    await contact.save();
    
    console.log('✅ Contact saved successfully:', contact._id);
    
    res.status(201).json({ 
      success: true, 
      message: 'Contact saved successfully',
      id: contact._id
    });
  } catch (err) {
    console.error('❌ Error saving contact:', err);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to save contact',
      details: err.message 
    });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📝 Test with: curl http://localhost:${PORT}/api/health`);
});
