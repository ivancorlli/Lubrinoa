const express = require('express');
const api = express.Router();

// Middlewares 


// Controladores
const categoryControllers = require('../controllers/categoryControllers');

// Ruteo
api.post('/category', categoryControllers.postCategory);
api.get('/category/:name?/:page?', categoryControllers.getCategories);
api.get('/category/name', categoryControllers.getCategoryName);



module.exports = api