const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs')

exports.login_get = asyncHandler( async(req, res, next) => {
    res.render('login');
})

exports.login_post = [
    body("username", "Username must not be empty").trim().isLength({ min: 1 }).escape(),
    body("password", "password must not be empty").trim().isLength({ min: 1 }).escape(),
    asyncHandler( async(req, res, next) => {
        const errors = validationResult(req);
        
    })
]