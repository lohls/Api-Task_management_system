'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      tasks.belongsTo(models.users, {
        as: 'user',
        foreignKey: 'userId'
      })
    }
  }
  tasks.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    userId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'tasks',
  });
  return tasks;
};