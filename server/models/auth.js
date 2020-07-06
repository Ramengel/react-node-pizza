const Sequelize = require('sequelize');
const sequelize = require('../db/init');

const User = sequelize.define('auth', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

module.exports = {
  User
};
