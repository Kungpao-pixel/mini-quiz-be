// controllers/answerController.js
const { Answer } = require("../models");

exports.getAnswersByQuestionId = async (req, res) => {
  const { questionId } = req.params;
  try {
    const answers = await Answer.findAll({ where: { question_id: questionId } });
    res.status(200).json(answers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.checkAnswer = async (req, res) => {
  const { questionId, answerId } = req.body;

  try {
    const answer = await Answer.findOne({
      where: {
        id: answerId,
        question_id: questionId
      }
    });

    if (!answer) {
      return res.status(404).json({ correct: false, message: "Answer not found" });
    }

    res.status(200).json({ correct: answer.is_correct });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
