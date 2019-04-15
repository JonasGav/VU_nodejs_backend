const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/product.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/get', product_controller.test);
router.post('/create', product_controller.product_create);
router.get('/:id/get', product_controller.product_details);
router.put('/:id/update', product_controller.product_update);
router.delete('/:id/delete', product_controller.product_delete);
router.get('/getAll', product_controller.product_getAll);

module.exports = router;