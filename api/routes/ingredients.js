// in order to fetch initial ingredient from back-end, and then show it in burger builder

const express = require('express');
const router = express.Router();


const Ingredient = require('../models/ingredient');

router.get("/", (req, res, next) => {
    Ingredient.find()
        .select("bacon cheese meat salad")
        .exec()
        .then(docs => {
            res.status(200).json(docs);
            
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
});

router.post("/", (req, res, next) => {
    const product = new Product({
        bacon: req.body.bacon,
        cheese: req.body.cheese,
        meat: req.body.meat,
        salad: req.body.salad
    });
    product.save()
           .then(result => {
               res.status(201).json({
                    message:'Handling POST requests to /ingredients',
                    createProduct: result
                });
           })
           .catch(err => {
               res.status(500).json({
                    error: err
               });
            });
    
});

module.exports = router;