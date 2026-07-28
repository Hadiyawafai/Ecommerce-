const mongoose=require('mongoose')
const upload=require('../middleware/multer')

const {   
    handleAddProduct,
    handleListProduct,
    handleRemoveProduct,
    handleSingleProduct
}=require('../controller/productController')

const express=require('express')
const router=express.Router()

router.post('/add',upload.fields([  { name: "profile", maxCount: 1 },
    { name: "resume", maxCount: 1 }]), handleAddProduct)
router.post('/remove',handleRemoveProduct)
router.post('/single',handleSingleProduct)
router.get('/list',handleListProduct)


export default productRouter;