const express = require('express');
const api = express.Router();

// Middlewares 


// Controladores
const userControllers = require('../controllers/userControllers')

// Ruteo
api.post('/register', userControllers.postUser);
api.post('/login', userControllers.logIn);

api.get('/user' , userControllers.getUser)


// Refresh token
api.post('/token/refresh', userControllers.refreshToken)



module.exports = api