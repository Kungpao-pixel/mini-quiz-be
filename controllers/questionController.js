const { Question, Answer } = require("../models");

exports.getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.findAll({
      include: [
        {
          model: Answer,
          attributes: ["id", "answer_text", "is_correct"],
        },
      ],
    });
    res.status(200).json(questions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getQuestionById = async (req, res) => {
  const { id } = req.params;
  try {
    const question = await Question.findByPk(id, {
      include: [
        {
          model: Answer,
          attributes: ["id", "answer_text", "is_correct"],
        },
      ],
    });

    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }

    res.status(200).json(question);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
