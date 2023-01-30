const categoryModel = require('./model');

//Tạo mới một category
const createCategory = async (categoryBody) => {
    //bắt lỗi tên danh mục không được trùng
    // const category = await categoryModel.findOne({ name: categoryBody.name });
    // if (category) {
    //     return { error: "Tên danh mục đã tồn tại" };
    // }
    // console.log(categoryBody);
    //return await categoryModel.create(categoryBody);
    const c = new categoryModel(categoryBody)
    await c.save();
}

//lấy tất cả thông tin category
const getAllCategory = async () => {
    return await categoryModel.find();
}

//get single category
const getSingleCategory = async (id) => {
    return await categoryModel.findById(id);
}

//update category
const updateCategory = async (id, categoryBody) => {
    return await categoryModel.findByIdAndUpdate(id, categoryBody, { new: true });//new: true trả về giá trị mới nhất
}

//delete category
const deleteCategory = async (id) => {
    return await categoryModel.findByIdAndDelete(id);//tại sao xóa thì không cần dùng new: true. Vì khi xóa thì không cần trả về giá trị mới nhất mà chỉ cần trả về giá trị đã xóa.
}

//delete all category
// const deleteAllCategory = async () => {
//     return await categoryModel.deleteMany();
// }

//get count of category
// const getCountCategory = async () => {
//     return await categoryModel.countDocuments();
// }

module.exports = {
    createCategory,
    getAllCategory,
    getSingleCategory,
    updateCategory,
    deleteCategory,
    // deleteAllCategory,
    // getCountCategory
};