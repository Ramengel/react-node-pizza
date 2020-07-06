const { Router } = require('express');
const { makeOrder, getOrders } = require('../controllers/order-controller');
const authMiddleware = require('../services/middlewares/auth-middleware')

const router = Router();

router.post('/makeOrder', authMiddleware.checkOrder, makeOrder);

router.get('/get-orders', authMiddleware.checkToken, getOrders);

module.exports = router;
