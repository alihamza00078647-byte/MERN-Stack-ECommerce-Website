const express = require('express');
const productRouter = express.Router();
const { addProduct, removeProduct, singleProduct, listProduct } = require('../Controller/productController');
const { upload } = require('../Middleware/multer');
const { adminAuth } = require('../Middleware/adminAuth');


productRouter.post('/add', adminAuth, upload.fields([{name : "image1", maxCount : 1}, {name : "image2", maxCount : 1}, {name : "image3", maxCount : 1}, {name : "image4", maxCount : 1}]), addProduct);

productRouter.post('/remove', adminAuth, removeProduct);

productRouter.post('/single', singleProduct);

productRouter.get('/list', listProduct);


exports.productRouter = productRouter;