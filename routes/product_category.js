const express = require('express');
const productCategoryController = require('../controllers/product_category');
const routes = express.Router();

routes.post('/', productCategoryController.store);
routes.get('/:category?', productCategoryController.index);
module.exports = routes