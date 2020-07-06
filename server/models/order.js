const Sequelize = require('sequelize');
const sequelize = require('../db/init');

const Order = sequelize.define('order', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  jsonData: {
    type: Sequelize.JSON,
    allowNull: false
  },
  totalPriceDollar: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  totalPriceEuro: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = {
    Order
};
