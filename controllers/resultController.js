const { Result } = require('../models');

exports.submitResult = async (req, res) => {
  const { score } = req.body;
  const userId = req.userId;
  try {
    const result = await Result.create({
      user_id: userId,
      score
    });
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
