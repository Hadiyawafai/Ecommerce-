const mongoose=require('mongoose')
const {handleAdminLogin,handleLoginUser,handleRegisterUser}=require('../controller/userController')
const express=require('express')
const router=express.Router()

router.post('/login',handleLoginUser)

router.post('/register',handleRegisterUser)

router.post('/admin',handleAdminLoginLogin)
export default userRouter;