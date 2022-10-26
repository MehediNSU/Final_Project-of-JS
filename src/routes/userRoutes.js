const express = require('express');
const { register, login } = require('../controllers/userController');

const userRouter = express.Router();

userRouter.post('/register', register);
userRouter.get('/login', login);

module.exports = userRouter;
