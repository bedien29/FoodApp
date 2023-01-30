const productModel = require('./model');
const categoryModel = require('../category/model');
const mongoose = require('mongoose');

//create a new product
const createProduct = async (productBody) => {
    // if(!mongoose.isValidObjectId(productBody.category_id)) {
    //     return { error: 'Invalid category id' };
    // }
    // const category = await categoryModel.findById(productBody.category_id);
    // if(!category) {
    //     return { error: 'Category not found' };
    // }

    const p = new productModel(productBody)
    await p.save();
}

//get all products
const getAllProducts = async () => {
    const products = await productModel.find().populate('category_id', 'name -_id');
    return products;
}

//get a single product
const getSingleProduct = async (productId) => {
    return await productModel.findById(productId).populate('category_id', 'name -_id');
}

//get count of products
const getCountProduct = async () => {
    return await productModel.countDocuments();
}

//update product
const updateProduct = async (productId, productBody) => {
    return await productModel.findByIdAndUpdate(productId, productBody, { new: true });
}

//delete product
const deleteProduct = async (productId) => {
    return await productModel.findByIdAndDelete(productId);
}

//get by id product
const getByIdProduct = async (id) => {
    return await productModel.findById(id);
}

module.exports = {
    createProduct,
    getSingleProduct,
    getAllProducts,
    getCountProduct,
    updateProduct,
    deleteProduct,
    getByIdProduct
};