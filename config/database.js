import mongoose from 'mongoose';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

async function database() {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
  }
}

module.exports = database;
