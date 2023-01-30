const categoryService = require('./service');

//Tạo mới một category
const createCategory = async (body) => {
    // try {
    //     console.log(req.body);
    //     const category = await categoryService.createCategory(req.body);
    //     res.status(200).json({
    //         success: true,
    //         data: category
    //     });
    // } catch (error) {
    //     res.status(500).json(error);
    // }
    const category = await categoryService.createCategory(body);
    return category;
}

//lấy tất cả thông tin category
const getAllCategory = async (req, res) => {
    // try {
    //     const category = await categoryService.getAllCategory();
    //     res.status(200).json(category);
    // } catch (error) {
    //     res.status(500).json(error);
    // }
    const data = await categoryService.getAllCategory();
    return data;
}

//get single category
const getSingleCategory = async (req, res) => {
    try {
        const category = await categoryService.getSingleCategory(req.params.id);
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json(error);
    }
}

//update category
const updateCategory = async (req, res) => {
    try {
        const category = await categoryService.updateCategory(req.params.id, req.body);
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json(error);
    }
}

//delete category
const deleteCategory = async (body) => {
    // try {
    //     const category = await categoryService.deleteCategory(req.params.id);
    //     res.status(200).json(category);
    // } catch (error) {
    //     res.status(500).json(error);
    // }
    const category = await categoryService.deleteCategory(body);
    return category;
}

//delete all category
// const deleteAllCategory = async (req, res) => {
//     try {
//         const category = await categoryService.deleteAllCategory();
//         res.status(200).json(category);
//     } catch (error) {
//         res.status(500).json(error);
//     }
// }

//get count category
// const getCountCategory = async (req, res) => {
//     try {
//         const category = await categoryService.getCountCategory();
//         res.status(200).json(category);
//     } catch (error) {
//         res.status(500).json(error);
//     }
// }


module.exports = {
    createCategory,
    getAllCategory,
    getSingleCategory,
    updateCategory,
    deleteCategory,
    // deleteAllCategory,
    // getCountCategory
}