const express = require('express');
const categoryController = require('../controllers/category');
const routes = express.Router();

routes.post('/', categoryController.store);

module.exports = routes;