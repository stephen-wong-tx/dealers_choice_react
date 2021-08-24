const db = require('./db');
const Sequelize = require('sequelize');
const { DataTypes, STRING, DECIMAL, UUID, UUIDV4 } = Sequelize;

const Range = db.define('range', {
  ID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    validate: {
      notEmpty: true
    }
  },
  Name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
});

module.exports = {
  Range
}