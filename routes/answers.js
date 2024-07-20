const express = require("express");
const router = express.Router();
const answerController = require("../controllers/answerController");
const authMiddleware = require("../middlewares/auth");

router.get(
  "/questions/:questionId",
  authMiddleware.verifyToken,
  answerController.getAnswersByQuestionId
);

router.post(
  "/",
  authMiddleware.verifyToken,
  answerController.checkAnswer
);

module.exports = router;
