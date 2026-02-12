const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB client setup
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// GET /api/hello — Pings MongoDB and returns the result
app.get('/api/hello', async (req, res) => {
  try {
    await client.connect();
    await client.db('admin').command({ ping: 1 });

    res.json({
      success: true,
      message: 'Pinged your deployment. You successfully connected to MongoDB!',
    });
  } catch (error) {
    console.error('MongoDB connection error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to connect to MongoDB.',
      error: error.message,
    });
  } finally {
    await client.close();
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
