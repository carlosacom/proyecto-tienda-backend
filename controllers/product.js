const moment = require("moment");
const { Validator } = require('node-input-validator');

const Product = require('../models/product')

const productController = {
    store: (req, res) => {
        const body = req.body;
        const validator = new Validator(body, {
            name: 'required|string',
            description: 'required|string',
            barcode: 'required|string',
            price: 'required|numeric'
        });

        validator.check().then(matched => {
            if (!matched) return res.status(400).send({ message: 'form_invalid', errors: validator.errors });
            // guardar el producto
            const product = new Product({
                name: body.name,
                description: body.description,
                barcode: body.barcode,
                price: body.price,
                created_at: moment().unix()
            });
            product.save((err, productStored) => {
                if (err) return res.status(500).send({message: 'server_error', err});
                return res.status(200).send(productStored)
            })
        })
    }
}

module.exports = productController