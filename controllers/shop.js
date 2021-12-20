const admin = require("../routes/admin");
const Product = require('./../models/product');


exports.getProducts = (req, res, next) => {
    Product.fetchAll((product) => {
        res.render('shop/product-list', {
            prods: product,
            pageTitle: 'All Products',
            path: '/product-list'
        });
    });
}

exports.getIndex = (req, res, next) => {
    Product.fetchAll((product) => {
        res.render('shop/index', {
            prods: product,
            pageTitle: 'Shop',
            path: '/index'
        });
    });
};

exports.getCart = (req,res,next)=>{
    res.render('shop/shopCart',{
       path: '/cart',
       pageTitle: 'Your cart'
    });
};

exports.getCheckout = (req,res,next)=>{
    res.render('shop/checkout',{
        path: '/checkout',
        pageTitle: 'Checkout'
    });
};