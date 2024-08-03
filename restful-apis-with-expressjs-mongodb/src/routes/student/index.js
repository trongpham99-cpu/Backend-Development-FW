const express = require('express');
const router = express.Router();
const studentController = require('../../controllers/student.controller');

router.get('/', studentController.list);
router.post('/', studentController.create);
router.get('/:id', studentController.get);

module.exports = router;