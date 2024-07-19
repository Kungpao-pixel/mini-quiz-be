'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Result extends Model {
    static associate(models) {
      Result.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user'
      });
    }
  }
  Result.init({
    user_id: DataTypes.INTEGER,
    score: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Result',
  });
  return Result;
};
