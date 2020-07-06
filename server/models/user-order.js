const Sequelize = require('sequelize');
const sequelize = require('../db/init');
const { User } = require('./auth');
const { Order } = require('./order');

const UserOrderId = sequelize.define("user_order_id", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
});

User.belongsToMany(Order, {through: UserOrderId});
Order.belongsToMany(User, {through: UserOrderId});

module.exports = {
    UserOrderId
};
  
 
