var express = require('express');
var router = express.Router();

const categoryController = require('../components/category/controller');

const upload = require('../middle/capNhat');

router.get('/category',  async function (req, res, next) {
    // hien thi trang them moi
    const categories = await categoryController.getAllCategory();
    res.render('danhSach', { categories: categories });
});


//them mới loại
router.get('/category/addcategory',  async function (req, res, next) {
    // hien thi trang them moi
    const categories = await categoryController.getAllCategory();
    res.render('addcategory', { categories: categories });
});

router.post('/newcategory', upload.single('image'), async function (req, res, next) {
    //xu ly them moi san pham
    let { body, file } = req;
    let image = '';
    if (file) {
        //image = `http://192.168.165.140:3000/images/${file.filename}`;
        image = `http://192.168.1.8:3000/images/${file.filename}`;
    }
    body = { ...body, image };
    await categoryController.createCategory(req.body);
    res.redirect('/san-pham/category');
});

//delete category
router.delete('/category/:id/delete', async function (req, res, next) {
    // xử lý xóa sản phẩm
    const { id } = req.params;
    await categoryController.deleteCategory(id);
    //tra ve du lieu dang json
    res.json({ result: true });//tra ve API
  });

module.exports = router;