const User=require('../model/userModel')
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const handleLoginUser = async (req, res) => {

    try {

        const { email, password } = req.body;

        // Check if fields are empty
        if (!email || !password) {
            return res.status(400).json({
                message: "Email and Password are required"
            });
        }

        // Find user by email
        const user = await User.findOne({ email });

        // Check if user exists
        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid Password"
            });
        }

        // Create JWT Token
        const token = jwt.sign(
            {
                id: user._id,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        // Send Response
        res.status(200).json({
            message: "Login Successful",
            token
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};
// Signup
const registerUser = async (req, res) => {

    try {

        const { name, email, password } = req.body;

        // Check 1: Empty fields
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        // Check 2: Email already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "Email already exists"
            });
        }
        const salt=await bcrypt.genSalt(10)
        // Hash password
        const hashedPassword = await bcrypt.hash(password, salt);

        // Save user
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        res.status(201).json({
            message: "User Registered",
            user
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};
const handleAdminLogin=async(req,res)=>{

}
module.export={handleAdminLogin,handleLoginUser,handleRegisterUser}