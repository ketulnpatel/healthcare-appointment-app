const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const appointmentRoutes = require('./routes/appointments');
const doctorRoutes = require('./routes/doctors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health check route
app.get('/', (req, res) => {
  res.json({ status: 'MediCare API is running 🏥', version: '1.0.0' });
});

// Routes
app.use('/api/appointments', appointmentRoutes);
app.use('/api/doctors', doctorRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(process.env.PORT || 5000, () => {
      console.log(`🚀 Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  });
