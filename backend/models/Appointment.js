const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName:  { type: String, required: true, trim: true },
    email:     { type: String, required: true, trim: true, lowercase: true },
    phone:     { type: String, required: true },
    specialty: { type: String, required: true },
    doctor:    { type: String, required: true },
    date:      { type: Date,   required: true },
    timeSlot:  { type: String, required: true },
    symptoms:  { type: String, default: '' },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'cancelled'],
      default: 'pending',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Appointment', appointmentSchema);
