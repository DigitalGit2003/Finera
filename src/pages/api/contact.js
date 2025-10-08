import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;

// Contact Schema
const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  service: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

async function connectDB() {
  if (mongoose.connection.readyState >= 1) return;
  await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await connectDB();
      const contact = new Contact(req.body);
      await contact.save();
      return res.status(201).json({ message: 'Contact saved successfully' });
    } catch (err) {
      return res.status(500).json({ error: 'Failed to save contact' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
