var express = require('express');
var router = express.Router();

const upload = require('../middle/capNhat');
const productController = require('../components/products/controller');
const categoryController = require('../components/category/controller');

//middle
const { checkLogin, checkRole } = require('../middle/authentication');

router.get("/", async function (req, res, next) {
    res.render("home");
});

router.get("/products-list", checkLogin, checkRole('admin'), async function (req, res, next) {
    const data = await productController.getAllProducts();
    console.log(data);
    res.render("danhSach", { products: data });
});

// router.get('/category',  async function (req, res, next) {
//     // hien thi trang them moi
//     const categories = await categoryController.getAllCategory();
//     res.render('danhSach', { categories: categories });
// });


router.get('/addproduct',  async function (req, res, next) {
    // hien thi trang them moi
    const categories = await categoryController.getAllCategory();
    res.render('addproduct', { categories: categories });
});

// router.get("/addproduct", async function (req, res, next) {
//     res.render("addproduct", {});
// });

//them san pham
router.post('/', upload.single('image'), async function (req, res, next) {
    //xu ly them moi san pham
    let { body, file } = req;
    let image = '';
    if (file) {
        //image = `http://192.168.165.140:3000/images/${file.filename}`;
        image = `http://192.168.100.54:3000/images/${file.filename}`;
    }
    body = { ...body, image };
    await productController.createProduct(body);
    res.redirect('/san-pham');
});

router.post('/addcategory', upload.single('image'), async function (req, res, next) {
    let { body, file } = req;
    let image = '';
    if (file) {
        image = `http://192.168.1.8:3000/images/${file.filename}`;
    }
    body = { ...body, image };
    await categoryController.createCategory(body);
    res.redirect('/products/categories-list');
});

router.delete('/product/:id/delete', async function (req, res, next) {
    const { id } = req.params;
    await productController.deleteProduct(id);
    //tra ve du lieu dang json
    res.json({ result: true });//tra ve API
});

//edit product, lấy dữ liệu từ database của sản phẩm cần sửa và hiển thị lên form
router.get('/:id/edit', async function (req, res, next) {
    // xử lý lấy một sản phẩm
    const { id } = req.params;
    //lay chi tiet 1 san pham
    const product = await productController.getByIdProduct(id);
    //lay danh sach danh muc
    const categories = await categoryController.getAllCategory();
    console.log(product);
    res.render('updateproduct', { product: product, category: categories });//lay dc thong tin san pham truyen ra ben ngoai
});

router.post('/:id/edit', [upload.single('image')  ], async function (req, res, next) {
    // xử lý cập nhật một sản phẩm
    let { params, file, body } = req;
    delete body.image;

    if (file) {
      //let image = `http://192.168.165.140:3000/images/${file.filename}`;
      let image = `http://192.168.100.54:3000/images/${file.filename}`;
      body = { ...body, image };
    }

    await productController.updateProduct(params.id, body);

    res.redirect('/san-pham');
  });

module.exports = router;

// var express = require('express');
// var router = express.Router();

// const productController = require('../components/products/controller');
// // const categoryController = require('../components/categories/controller');

// // const upload = require('../middle/upload');
// // const authentication = require('../middle/authentication');

// /**
//  * page: product
//  * http://localhost:3000/san-pham
//  * method: get
//  * detail: get list products
//  * author: Chấn Nguyễn
//  * date: 17th March 2022 11:05
//  */
// router.get('/',  async function (req, res, next) {
//   // lấy danh sách sản phẩm
//   const data = await productController.getAllProducts();
//   res.render('danhSach', { products: data });
// });










// module.exports = router;