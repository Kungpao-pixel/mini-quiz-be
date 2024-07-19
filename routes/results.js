const express = require('express');
const router = express.Router();
const resultController = require('../controllers/resultController');
const authMiddleware = require('../middlewares/auth');

router.post('/', authMiddleware.verifyToken, resultController.submitResult);

module.exports = router;
