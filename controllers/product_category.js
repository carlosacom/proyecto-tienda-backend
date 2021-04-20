const ProductCategory = require('../models/product_category');
const Product = require('../models/product');
const { Validator } = require('node-input-validator');

const productCategoryController = {
    store: (req, res) => {
        const body = req. body;
        const validator = new Validator(body, {
            product: 'required|string',
            category: 'required|string',
        });
        validator.check().then(matched => {
            if (!matched) return res.status(400).send({ message: 'form_invalid', errors: validator.errors });
            // guardar producto en la categoria
            ProductCategory.findOne({ product: body.product, category: body.category }, (err, productExists) => {
                if (err) return res.status(500).send({message: 'server_error', err});
                if (productExists) return res.status(400).send({ message: 'ya existe el producto en la categoría' })
                const productCategory = new ProductCategory({
                    product: body.product,
                    category: body.category
                });
                productCategory.save((err, pcStored) => {
                    if (err) return res.status(500).send({message: 'server_error', err});
                    return res.status(200).send(pcStored)
                })
            })
        });
    },
    index: (req, res) => {
        const category = req.params.category;
        if (category) {
            ProductCategory.find({ category}).populate('product').exec((err, productCategories) => {
                if (err) return res.status(500).send({message: 'server_error', err});
                return res.status(200).send(productCategories)
            });
        } else {
            Product.find().exec((err, products) => {
                if (err) return res.status(500).send({message: 'server_error', err});
                return res.status(200).send(products)
            });
        }
    }
}

module.exports = productCategoryController