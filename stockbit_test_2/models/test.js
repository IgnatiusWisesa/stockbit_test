'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class test extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  test.init({
    endpoint: DataTypes.STRING,
    agent: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'test',
    underscored: true
  });
  return test;
};