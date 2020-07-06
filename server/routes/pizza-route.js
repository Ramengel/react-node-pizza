const { Router } = require('express');
const { getPizza, getPizzas } = require('../controllers/pizza-controller');

const router = Router();

router.get('/', getPizzas);

router.get('/:id', getPizza);

module.exports = router;
