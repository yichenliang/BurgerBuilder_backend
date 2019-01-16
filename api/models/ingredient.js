const mongoose = require('mongoose');

const ingredientSchema = mongoose.Schema({
    //_id: mongoose.Schema.Types.ObjectId,
    bacon: Number,
    cheese: Number,
    meat: Number,
    salad: Number
});

module.exports = mongoose.model('Ingredient', ingredientSchema);