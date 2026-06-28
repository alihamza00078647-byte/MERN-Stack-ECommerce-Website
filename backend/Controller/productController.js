const { v2: cloudinary } = require("cloudinary");
const product = require('../model/productModel');


// function for Add Product
const addProduct = async (req, res, next) => {
    try {
        const {name, description, price, sizes, bestseller, category, subCategory} = req.body; 

        // Add condition and tell that if image exist then add else false
        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];

        const images = [image1, image2, image3, image4].filter((item) => item !== undefined)

        // We Send All Images to cloudinary and take only there urls
        let imagesURL  = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, {resource_type : "image"});
                return result.secure_url;
            })
        )

        const productData = {
            name, 
            description, 
            price: Number(price),
            sizes: JSON.parse(sizes), 
            bestseller : bestseller === "true"? true : false, 
            image : imagesURL,
            date: Date.now(),
            category,
            subCategory
        }

        console.log(productData);

        const Product = new product(productData);
        await Product.save();
        // console.log(name, description, price, sizes, bestseller, category, subCategory);


        res.json({success: true, message : "Product Added Successfully"})
        
        
    } catch (err) {
        console.log(err);
        res.json({success: false, message: err.message})
    }
}       



// function for List Product
const listProduct = async (req, res, next) => {
    
} 


// function for Removing Product
const removeProduct = async (req, res, next) => {

}


// function for Single Product info
const singleProduct = async (req, res, next) => {

}


module.exports = {
    addProduct, listProduct, removeProduct, singleProduct
}