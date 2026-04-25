const express = require('express');
const router  = express.Router();
const {
  getAllAppointments,
  createAppointment,
  updateAppointmentStatus,
  deleteAppointment,
} = require('../controllers/appointmentController');

// GET  /api/appointments       - Get all appointments
// POST /api/appointments       - Create new appointment
// PUT  /api/appointments/:id   - Update status
// DELETE /api/appointments/:id - Delete appointment

router.get('/',    getAllAppointments);
router.post('/',   createAppointment);
router.put('/:id', updateAppointmentStatus);
router.delete('/:id', deleteAppointment);

module.exports = router;
