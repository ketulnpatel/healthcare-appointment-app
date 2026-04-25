const express = require('express');
const router  = express.Router();
const {
  getAllDoctors,
  getDoctorsBySpecialty,
} = require('../controllers/doctorController');

// GET /api/doctors              - Get all doctors
// GET /api/doctors/:specialty   - Filter by specialty

router.get('/',           getAllDoctors);
router.get('/:specialty', getDoctorsBySpecialty);

module.exports = router;
