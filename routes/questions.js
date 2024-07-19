const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');
const authMiddleware = require('../middlewares/auth');

router.get('/', authMiddleware.verifyToken, questionController.getAllQuestions);

module.exports = router;
