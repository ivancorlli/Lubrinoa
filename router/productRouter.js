const express = require('express');
const api = express.Router();

// Middlewares 
const filesHelper = require('../utils/uploadHelper');

// Controladores
const productControllers = require('../controllers/productControllers');

// Ruteo
api.post('/product', productControllers.postProduct);
api.delete('/product/:productId?', productControllers.deleteProduct);
api.get('/product/:productId?', productControllers.getProduct);
api.patch('/product', productControllers.editProduct);
api.post('/products', filesHelper.upload, productControllers.addProducts);
api.patch('/products', filesHelper.upload, productControllers.editProducts);
api.get('/products/:code?/:page?', productControllers.getProducts);
api.delete('/products', productControllers.deleteProducts);



module.exports = api