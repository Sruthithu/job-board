import mongoose from 'mongoose';

const databaseConnection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ Database connected with ${conn.connection.host}`);
  } catch (err) {
    console.error('❌ Database connection error:', err.message);
    process.exit(1); // stop server if DB fails
  }
};

export default databaseConnection;