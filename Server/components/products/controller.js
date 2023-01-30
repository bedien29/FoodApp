const productService = require('./service');

//create a new product
const createProduct = async (body) => {
        // let images = [];

        // if (typeof req.body.image === "string") {
        //     images.push(req.body.image);
        // } else {
        //     images = req.body.image;
        // }
        // //console.log(images);
        // const imagesLinks = [];

        // for (let i = 0; i < images.length; i++) {
        //     const result = await cloudinary.v2.uploader.upload(images[i], {
        //         folder: "products",
        //     });

        //     imagesLinks.push({
        //         public_id: result.public_id,
        //         url: result.secure_url,
        //     });
        // }

        // req.body.image = imagesLinks;
    await productService.createProduct(body);


}

//get all products
const getAllProducts = async (req, res) => {

    const data = await productService.getAllProducts();
    //dùng map lấy ra từng sản phẩm
    //     data.map(item => {
    //     item = {
    //         _id: item._id,
    //         name: item.name,
    //         price: item.price,
    //         quantity: item.quantity,
    //         image: item.image,
    //         description: item.description,
    //         category_id: item.category_id
    //     }
    //     return item;
    // })
    return data;
}

//get a single product
const getSingleProduct = async (req, res) => {
    try {
        const product = await productService.getSingleProduct(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
}

//get count of products
const getCountProduct = async (req, res) => {
    try {
        const product = await productService.getCountProduct();
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
}

//update product
const updateProduct = async (id, product) => {
    // try {
    //     const product = await productService.updateProduct(req.params.id, req.body);
    //     res.status(200).json(product);
    // } catch (error) {
    //     res.status(500).json(error);
    // }
    await productService.updateProduct(id, product);
}

//delete product
const deleteProduct = async (id) => {
    // try {
    //     const product = await productService.deleteProduct(req.params.id);
    //     res.status(200).json(product);
    // } catch (error) {
    //     res.status(500).json(error);
    // }
    await productService.deleteProduct(id);
}

//get ByIdProduct
const getByIdProduct = async (id) => {
    const product = await productService.getByIdProduct(id);
    // product = {
    //     _id: product._id,
    //     name: product.name,
    //     price: product.price,
    //     quantity: product.quantity,
    //     image: product.image,
    //     description: product.description,
    //     category_id: product.category_id
    // }
    return product;
}

module.exports = {
    createProduct,
    getSingleProduct,
    getAllProducts,
    getCountProduct,
    updateProduct,
    deleteProduct,
    getByIdProduct,
};