const express = require('express');
const { registerUser, loginUser, adminLogin } = require('../Controller/userController');
const userRouter = express.Router();


userRouter.post('/register', registerUser);

userRouter.post('/login', loginUser);

userRouter.post('/admin', adminLogin);


exports.userRouter = userRouter;