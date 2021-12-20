const fs = require('fs');
const rootPath = require('./../util/path');
const path = require('path');
const {uploadFile, uploadFileAWS} = require("../s3client");
const utilPath = path.join(rootPath, 'data', 'products.json');
const utilPathBook = path.join(rootPath, 'data', 'images.json');

const getProductsFromFile = (cb) => {
    fs.readFile(utilPath, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent.toString()));
        }
    });
}

module.exports = class Product {
    constructor(title,imageURL, description, price) {
        this.title = title;
        this.imageURL = imageURL;
        this.description = description;
        this.price = price;
    }

    static fetchAll(cb) {
        getProductsFromFile(cb);
    }

    save() {
        getProductsFromFile((products)=>{
            products.push(this);
            fs.writeFile(utilPath, JSON.stringify(products), (err) => {
                console.log(err);
            });
            fs.writeFile(utilPathBook, JSON.stringify(products), (err) => {
                console.log(err);
            });

        });
    }
}