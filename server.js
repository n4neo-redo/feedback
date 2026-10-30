require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const feedbackRoutes = require('./routes/feedback');

const app = express();
const PORT = process.env.PORT || 3000;

// --- Middleware ---
app.use(cors());
app.use(express.json({ limit: '5mb' }));

// Serve static files (index.html, feedback-logo.png, etc.)
app.use(express.static(path.join(__dirname)));

// --- API Routes ---
app.use('/api/feedback', feedbackRoutes);

// Fallback: serve index.html for any non-API route
app.get('/{*splat}', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// --- Connect to MongoDB Atlas & Start Server ---
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB Atlas successfully!');
    app.listen(PORT, () => {
      console.log(`🚀 FeedbackIQ server running at http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ MongoDB connection failed:', err.message);
    process.exit(1);
  });
