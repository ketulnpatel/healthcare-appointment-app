// Run this once to seed doctors into MongoDB
// Command: node db/seed.js

const mongoose = require('mongoose');
require('dotenv').config({ path: '../backend/.env' });

const Doctor = require('../backend/models/Doctor');

const doctors = [
  { name: 'Dr. Rohan Mehta',  specialty: 'Cardiology',   experience: 12, rating: 4.9, available: true },
  { name: 'Dr. Sneha Kapoor', specialty: 'Neurology',    experience: 9,  rating: 4.8, available: true },
  { name: 'Dr. Arjun Patel',  specialty: 'Orthopedics',  experience: 15, rating: 4.7, available: false },
  { name: 'Dr. Priya Sharma', specialty: 'Dermatology',  experience: 7,  rating: 4.6, available: true },
  { name: 'Dr. Vivek Joshi',  specialty: 'Pediatrics',   experience: 10, rating: 4.8, available: true },
  { name: 'Dr. Anita Rao',    specialty: 'Ophthalmology',experience: 11, rating: 4.7, available: true },
];

async function seed() {
  await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/medicare');
  await Doctor.deleteMany({});
  await Doctor.insertMany(doctors);
  console.log('✅ Database seeded with', doctors.length, 'doctors');
  await mongoose.disconnect();
}

seed().catch(console.error);
