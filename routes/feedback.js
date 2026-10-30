const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

// GET /api/feedback — Fetch all feedback records (newest first)
router.get('/', async (req, res) => {
  try {
    const records = await Feedback.find().sort({ date: -1 });
    res.json(records);
  } catch (err) {
    console.error('GET /api/feedback error:', err.message);
    res.status(500).json({ error: 'Failed to fetch feedback records' });
  }
});

// POST /api/feedback — Create a new feedback record
router.post('/', async (req, res) => {
  try {
    const { id, name, email, category, text, rating, sentiment, date } = req.body;

    if (!name || !text || !rating || !sentiment) {
      return res.status(400).json({ error: 'Missing required fields: name, text, rating, sentiment' });
    }

    const newFeedback = new Feedback({
      id: id || 'rec_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      name,
      email: email || 'Customer',
      category: category || 'Product Quality',
      text,
      rating: Number(rating),
      sentiment,
      date: date || new Date().toISOString()
    });

    const saved = await newFeedback.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error('POST /api/feedback error:', err.message);
    res.status(500).json({ error: 'Failed to save feedback' });
  }
});

// DELETE /api/feedback/:id — Delete a feedback record by custom id
router.delete('/:id', async (req, res) => {
  try {
    const result = await Feedback.findOneAndDelete({ id: req.params.id });
    if (!result) {
      return res.status(404).json({ error: 'Record not found' });
    }
    res.json({ message: 'Record deleted', id: req.params.id });
  } catch (err) {
    console.error('DELETE /api/feedback error:', err.message);
    res.status(500).json({ error: 'Failed to delete record' });
  }
});

// DELETE /api/feedback — Delete ALL feedback records
router.delete('/', async (req, res) => {
  try {
    await Feedback.deleteMany({});
    res.json({ message: 'All records deleted' });
  } catch (err) {
    console.error('DELETE ALL /api/feedback error:', err.message);
    res.status(500).json({ error: 'Failed to clear records' });
  }
});

// POST /api/feedback/bulk — Insert multiple records (for demo data restore)
router.post('/bulk', async (req, res) => {
  try {
    const records = req.body;
    if (!Array.isArray(records) || records.length === 0) {
      return res.status(400).json({ error: 'Expected a non-empty array of records' });
    }

    // Clear existing records and insert new ones
    await Feedback.deleteMany({});
    const inserted = await Feedback.insertMany(records);
    res.status(201).json(inserted);
  } catch (err) {
    console.error('POST /api/feedback/bulk error:', err.message);
    res.status(500).json({ error: 'Failed to bulk insert records' });
  }
});

module.exports = router;

