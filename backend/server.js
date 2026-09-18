import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import databaseConnection from './config/database.js';
import jobsRouter from './routes/jobs.js';

dotenv.config();

// Connect to database
databaseConnection();

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
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});