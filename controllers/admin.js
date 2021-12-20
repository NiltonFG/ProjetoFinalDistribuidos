const Product = require("./../models/product");
const {uploadFileAWS} = require("../s3client");
const path = require("path");
const rootPath = require("./../util/path");
const utilPathBook = path.join(rootPath, 'data', 'images.json');

exports.getAddProduct = (req, res) => {
    res.render('admin/add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        activeProduct: true,
        formsCss: true,
        productCss: true
    });
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title,req.body.imageURL,req.body.description,req.body.price);
    product.save();
    uploadFileAWS("books",utilPathBook).then((log)=>{
         console.log(log);
    });
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll((product) => {
        res.render('admin/products', {
            prods: product,
            pageTitle: 'Admin Products',
            path: '/admin/products'
        });
    });
}