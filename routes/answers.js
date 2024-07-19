const express = require("express");
const router = express.Router();
const answerController = require("../controllers/answerController");
const authMiddleware = require("../middlewares/auth");

router.get(
  "/:questionId",
  authMiddleware.verifyToken,
  answerController.getAnswersByQuestionId
);

module.exports = router;
