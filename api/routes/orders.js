const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Order = require('../models/order');

//fetchOrders
router.get("/:userId", (req, res, next) => {
    const id = req.params.userId;
    Order.find({userId: id})
        .exec()
        .then(docs => {
             if (docs.length >= 0){
                res.status(200).json(docs);
             } 
             else {
                 res.status(404).json({
                     message: 'No entries found'
                 });
             }
            
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
});


//purchaseBurger && create order
router.post('/', (req, res, next) => {
    const order = new Order({
        //_id is order Id
        _id: new mongoose.Types.ObjectId(),
        ingredients: req.body.ingredients,
        orderData: req.body.orderData,
        price: req.body.price,
        userId: req.body.userId
    });

    order.save()
           .then(result => {
               res.status(201).json({
                message:'Handling POST requests to /orders',
                data: {name: result._id}
            });
           })
           .catch(err => {
               res.status(500).json({
                    error: err
               });
            });
});


module.exports = router;