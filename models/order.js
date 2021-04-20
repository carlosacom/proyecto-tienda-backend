const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    created_at: { type: Number, required: true },
    valid: { type: Boolean, default: false },
    full_name: { type: String, default: '' },
    address: { type: String, default: '' },
    document_type: { type: String, default: '' },
    document: { type: String, default: '' },
    email: { type: String, default: '' },
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;