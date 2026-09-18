import express from 'express';
import Job from '../models/Job.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const { category } = req.query;
  const filter = category && category !== 'All' ? { category } : {};
  const jobs = await Job.find(filter).sort({ createdAt: -1 });
  res.json(jobs);
});

router.post('/', async (req, res) => {
  try {
    const job = await Job.create(req.body);
    res.status(201).json(job);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;