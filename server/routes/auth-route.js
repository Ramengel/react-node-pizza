const { Router } = require('express');
const { login, registration, check } = require('../controllers/auth-controller');
const authMiddleware = require('../services/middlewares/auth-middleware')

const router = Router();

router.post('/registration', authMiddleware.checkRegistration, registration);

router.post('/login', authMiddleware.checkLogin, login);

router.get('/check', authMiddleware.checkToken, check);

module.exports = router;