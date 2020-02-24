const router = require('express').Router();
const StudentController = require('../controllers/student');

router.post('/', StudentController.submit);

module.exports = router;
