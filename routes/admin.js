const path = require('path');

const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin');


//  GET admin/add-product
router.get('/add-product',adminController.getAddProduct);

//  POST admin/add-product
router.post('/add-product', adminController.postAddProduct);

router.get('/products',adminController.getProducts);

module.exports = router;