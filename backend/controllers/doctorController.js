const Doctor = require('../models/Doctor');

// GET all doctors
const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find().sort({ rating: -1 });
    res.json({ success: true, data: doctors });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// GET doctors by specialty
const getDoctorsBySpecialty = async (req, res) => {
  try {
    const doctors = await Doctor.find({
      specialty: { $regex: req.params.specialty, $options: 'i' },
    });
    res.json({ success: true, data: doctors });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = { getAllDoctors, getDoctorsBySpecialty };
