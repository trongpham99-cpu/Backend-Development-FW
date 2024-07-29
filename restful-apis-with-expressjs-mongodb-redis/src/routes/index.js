const express = require('express');
const router = express.Router();

router.use('/v1/student', require('./student/index'));

module.exports = router;