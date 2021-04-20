const Category = require('../models/category');
const { Validator } = require('node-input-validator');

const categoryController = {
    store: (req, res) => {
        const body = req.body;
        const validator = new Validator(body, {
            name: 'required|string',
            description: 'required|string',
        });
        validator.check().then(matched => {
            if (!matched) return res.status(400).send({ message: 'form_invalid', errors: validator.errors });
            // guardar categoria
            const category = new Category({
                name: body.name,
                description: body.description
            });
            category.save((err, categoryStored) =>{
                if (err) return res.status(500).send({ message: 'server_error', err});
                return res.status(200).send(categoryStored)
            })
        })
    },
    index: (req, res) => {
        Category.find((err, categories) => {
            if (err) return res.status(500).send({ message: 'server_error', err});
            return res.status(200).send(categories)
        })
    }
};

module.exports = categoryController;