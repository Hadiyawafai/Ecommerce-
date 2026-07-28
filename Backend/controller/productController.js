const productModel=require('../model/ProductModel')

const cloudinary = require("../config/cloudinary");

const handleAddProduct = async (req, res) => {
    try {

        const {
            name,
            description,
            price,
            bestseller,
            category,
        } = req.body;

        const image1 = req.files?.image1?.[0];
        const image2 = req.files?.image2?.[0];

        if (!image1 || !image2) {
            return res.status(400).json({
                message: "Please upload both images",
            });
        }

        // Upload to Cloudinary

        const uploadImage1 = await cloudinary.uploader.upload(
            image1.path,
            {
                folder: "products",
            }
        );

        const uploadImage2 = await cloudinary.uploader.upload(
            image2.path,
            {
                folder: "products",
            }
        );

        // Save Product

        const product = await Product.create({
            name,
            description,
            price,
            bestseller,
            category,
            image: [
                uploadImage1.secure_url,
                uploadImage2.secure_url,
            ],
        });

        res.status(201).json({
            success: true,
            message: "Product Added Successfully",
            product,
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });

    }
}

const handleListProduct=async(req,res)=>{

}
const handleRemoveProduct=async(req,res)=>{

}
const handleSingleProduct=async(req,res)=>{

}

module.exports={
    handleAddProduct,
    handleListProduct,
    handleRemoveProduct,
    handleSingleProduct
}