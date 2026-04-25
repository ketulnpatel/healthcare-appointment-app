const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema(
  {
    name:        { type: String, required: true },
    specialty:   { type: String, required: true },
    experience:  { type: Number, required: true }, // years
    rating:      { type: Number, default: 4.5 },
    available:   { type: Boolean, default: true },
    avatar:      { type: String, default: '' },
    bio:         { type: String, default: '' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Doctor', doctorSchema);
