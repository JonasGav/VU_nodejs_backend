const Product = require('../models/product.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};


exports.product_create = function (req, res) {
    console.log("POST request received");
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })
};

exports.product_details = (req, res) => {
    Product.findById(req.params.id, (err, product) => {
        if (err) return next(err);
        console.log("Succesfully displayed data");
        res.send(product);
    })
};

exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        console.log("Succesfully updated data");
        res.send('Product udpated.');
    })
};

exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        console.log("Succesfully deleted data");
        res.send('Deleted successfully!');
    })
};

exports.product_getAll = (req, res) => {
    Product.find({}, (err, product) => {
        if (err) return next(err);
        console.log("Succesfully retrieved all data");
        res.send(product);
    })
};