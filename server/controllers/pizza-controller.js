/* eslint-disable no-unused-vars */
const { getAllPizzabyId, getAllPizzas } = require('../models/pizza');

exports.getPizzas = async (req, res) => res.json(await getAllPizzas());

exports.getPizza = async (req, res) => res.status(200).json(await getAllPizzabyId(+id));
