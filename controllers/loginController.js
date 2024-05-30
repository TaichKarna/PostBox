const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs')

exports.login_get = asyncHandler( async(req, res, next) => {
    res.render('login', {errors: []});
})

exports.login_post = [
    body("username", "Username must not be empty").trim().isLength({ min: 1 }).escape(),
    body("password", "password must not be empty").trim().isLength({ min: 1 }).escape(),
    asyncHandler(async (req, res, next) => {
        // Extract the validation errors from a request.
        const errors = validationResult(req);
   
        if (!errors.isEmpty()) {
          // There are errors.
          res.render('login',{errors: errors.errors})
          return;
        } else {
          // Data from form is valid
          res.redirect("/");
        }
        })
   
]