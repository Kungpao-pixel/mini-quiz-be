const { Answer } = require('../models');

exports.getAnswersByQuestionId = async (req, res) => {
  const { questionId } = req.params;
  try {
    const answers = await Answer.findAll({ where: { question_id: questionId } });
    res.status(200).json(answers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
