const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    default: 'Customer',
    trim: true
  },
  category: {
    type: String,
    default: 'Product Quality'
  },
  text: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  sentiment: {
    type: String,
    enum: ['Positive', 'Negative', 'Neutral'],
    required: true
  },
  date: {
    type: String,
    default: () => new Date().toISOString()
  }
}, {
  timestamps: true   // adds createdAt & updatedAt
});

module.exports = mongoose.model('Feedback', feedbackSchema);

