const mongoose = require('mongoose')

const purchaseSchema = new mongoose.Schema({
    productId: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    customerId: {
        type: String,
        required: true
    },
    deliveryCharge: {
        type: Number,
        required: true
    }
});

const Purchase = mongoose.model('Purchases', purchaseSchema)
module.exports = Purchase