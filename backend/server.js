import express from 'express';
import cors from 'cors';
import jobsRouter from './routes/jobs.js';
import mongoose from 'mongoose';

mongoose
  .connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/jobboard')
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('MongoDB error:', err));
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/jobs', jobsRouter);

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'Job Board API is running 🚀' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});