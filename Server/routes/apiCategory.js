const categoryController = require('../components/category/controller');
const express = require('express');
const router = express.Router();

//middleware
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

//create a new category
router.post('/createCategory', async (req, res) => {
    const category = await categoryController.createCategory(req.body);
    res.status(201).json({
        success: true,
        category: req.body,
    })
});

//get all category
router.get('/getAllCategory', async  (req, res) => {
    try {
        const category = await categoryController.getAllCategory();
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json(error);
    }
});

//get a single category
router.get('/getSingleCategory/:id', categoryController.getSingleCategory);

//update category
router.put('/updateCategory/:id', isAuthenticatedUser, authorizeRoles('admin'),categoryController.updateCategory);

//delete category
router.delete('/deleteCategory/:id', async (req, res) => {
    const category = await categoryController.deleteCategory(req.params.id);
    res.status(200).json(category);
})

//delete all category
// router.delete('/deleteAllCategory', categoryController.deleteAllCategory);

//get count category
// router.get('/getCountCategory', categoryController.getCountCategory);

module.exports = router;