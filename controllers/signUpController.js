const User = require("../models/user");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs')
// Display list of all Authors.
exports.signup_get = asyncHandler(async (req, res, next) => {
  const errors = [];
  res.render('sign-up',{errors: errors});
});


exports.signup_post =  [
    // Validate and sanitize fields.
    body("firstName", "First Name must not be empty").trim().isLength({ min: 1 }).escape(),
    body("lastName", "Last Name must not be empty").trim().isLength({ min: 1 }).escape(),
    body("username", "user name must atleast have 3 characters").trim().isLength({ min: 3 }).escape(),
    body("password", "password must not be empty").trim().isLength({ min: 1 }).escape(),
    body('confirmPassword',"passwords must match").custom((value, { req }) => {
      return value === req.body.password;
    }),
  
    // Process request after validation and sanitization.
    asyncHandler(async (req, res, next) => {
      // Extract the validation errors from a request.
      const errors = validationResult(req);
  
        bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
        const user = new User({
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            user_name: req.body.username,
            password: hashedPassword,
        })
      if (!errors.isEmpty()) {
        // There are errors.
        res.render('sign-up',{errors: errors.errors})
        return;
      } else {
        // Data from form is valid
        await user.save();
        res.redirect("/");
      }
      });
 
    }),
]