// const express = require("express");
// const adminAuth = express.Router();

const jwt = require('jsonwebtoken');


const adminAuth = (req, res, next) => {
    try {
        const {token} = req.headers;

        if (!token) {
            return res.json({success: false, message : "Not Authorized Login Again"});
        }

        const token_decode = jwt.verify(token, process.env.JWT_Secret);
        if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.json({success : false, message : "Not Authorized Login Again"});
        }

        next();
    } catch (err) {
        console.log(err);
        res.json({success : false, message : err.message})
    }
}

module.exports = {
    adminAuth
}
