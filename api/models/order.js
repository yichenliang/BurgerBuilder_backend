const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    ingredients:{
        bacon: Number,
        cheese: Number,
        meat: Number,
        salad: Number
    },
    orderData:{
        country: String,
        deliveryMethod: String,
        email: String,
        name: String,
        street: String,
        zipCode: String
    },
    price: Number,
    userId: {type: String, required: true}
});

module.exports = mongoose.model('Order', orderSchema);