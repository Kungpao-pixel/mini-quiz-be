// models/answer.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    static associate(models) {
      Answer.belongsTo(models.Question, {
        foreignKey: 'question_id',
        as: 'question'
      });
    }
  }
  Answer.init({
    question_id: DataTypes.INTEGER,
    answer_text: DataTypes.STRING,
    is_correct: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Answer',
  });
  return Answer;
};
