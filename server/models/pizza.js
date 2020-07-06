const Sequelize = require('sequelize');
const sequelize = require('../db/init');

const Pizza = sequelize.define('pizza', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  dollar: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  euro: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = {
  Pizza,
  
  getAllPizzas: async () => await Pizza.findAll({ raw: true }).then((pizzas) => pizzas).catch((err) => console.log(err)),

  getAllPizzabyId: async (id) => await Pizza.findByPk(id, { raw: true }).then((pizza) => pizza).catch((err) => console.log(err)),
};
