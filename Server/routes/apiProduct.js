const productController = require('../components/products/controller');
const express = require('express');
const router = express.Router();

//middleware
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

//create a new product
router.post('/createProduct', isAuthenticatedUser, authorizeRoles('admin'), async (req, res) => {
        const product = await productController.createProduct(req.body);
        // console.log(product)
        res.status(201).json(product);

});

//get all products
router.get('/getAllProducts', isAuthenticatedUser, async (req, res) => {
    const products = await productController.getAllProducts();
    res.status(200).json(products);
});

//get a single product
router.get('/getSingleProduct/:id', productController.getSingleProduct);

//get count of products
router.get('/getCountProduct', productController.getCountProduct);

//update product
router.put('/updateProduct/:id', isAuthenticatedUser, authorizeRoles('admin'), productController.updateProduct);

//delete product
router.delete('/deleteProduct/:id', async (req, res) => {
    const product = await productController.deleteProduct(req.params.id);
    res.status(200).json(product);
});

module.exports = router;