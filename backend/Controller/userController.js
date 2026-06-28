const user = require('../model/userModel');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_Secret);
}


const loginUser = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const User = await user.findOne({email});
        if (!User) {
            return res.json({success: false, message: "User doesn't exists"});
        }

        const isMatch = await bcrypt.compare(password, User.password);

        if (!isMatch) {
            return res.json({success : false, message : "Invalid Credetials"})
        }

        const token = createToken(User._id);
        res.json({success : true, token});

    } catch (err) {
        console.log(err);
        res.json({success: false, message: err.message})
    }
}


// Route Login for register/signup
const registerUser = async (req, res, next) => {
    try {
        const {name, email, password} = req.body;

        // check if user already exists.
        const exists = await user.findOne({email});
        if (exists) {
            return res.json({success : false, message: "User Already Exists"})
        }
        // Validate and store password
        validator
        
        if (!validator.isEmail(email)) {
            return res.json({success : false, message: "User Email is Not Validate"});
        }
        
        if (password.length < 8) {
            return res.json({success : false, message: "Enter a Strong Password."});
        }

        // hashing user password.
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new user({
            name,
            email,
            password : hashedPassword
        });

        const User = await newUser.save();

        const token = createToken(User._id)

        res.json({success : true, token})
        // console.log(exists)
        
    } catch(err) {
        console.log(err);
        res.json({success: false, message: err.message})
    }
}


// Route to Admin Login
const adminLogin = (req, res, next) => {
    
}


module.exports = {
    loginUser, registerUser, adminLogin
}

