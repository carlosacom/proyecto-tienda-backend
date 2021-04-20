const moment = require('moment');
const Order = require('../models/order');
const ItemOrder = require('../models/item_order');
const Product = require('../models/product');
const orderController = {
    store: (req, res) => {
        // body es un []
        const body = req.body;
        // crear el pedido
        const order = new Order({
            created_at: moment().unix()
        });
        order.save((err, orderStored) => {
            if (err) return res.status(500).send({message: 'server_error', err});
            orderController.storeItems(body, orderStored).then(validOrder => {
                if (validOrder) {
                    Order.findByIdAndUpdate(orderStored, { valid: true }, { new: true }, (err, orderUpdated) => {
                        if (err) return res.status(500).send({message: 'server_error', err});
                        return res.status(200).send(orderUpdated)
                    })
                } else {
                    return res.status(400).send({ message: 'Error en los items del pedido' })
                }
            });
        });
       
    },
    confirmation: (req, res) => {
        const body = req. body;
        const order = req.params.order;
        Order.findByIdAndUpdate(order, {...body}, { new: true }, (err, orderUpdated) => {
            if (err) return res.status(500).send({message: 'server_error', err});
            // aca se hace el llamado del socket
            return res.status(200).send(orderUpdated)
        })
    },
     // crear los items seleccionados a la orden
    storeItems: async (items, order) => {
        for (const item of items) {
            // buscar el producto
            const product = await Product.findById(item.product).exec();
            if (!product) return false;
            // validar si hay disponibilidad y si son menos de 10
            if (item.amount > 10) return false;
            const itemOrder = new ItemOrder({
                order,
                product,
                amount: item.amount
            })
            const itemStored = await itemOrder.save();
        }
        return true;
    }
}

module.exports = orderController