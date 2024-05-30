const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const Message = require('../models/message');

exports.index_get = asyncHandler( async(req, res, next) => {
    const authenticated = req.isAuthenticated();
    let messages = await Message.find({}).populate("user_name").exec();
    if(!authenticated){
        messages = [];
    }
    res.render('index', {messages: messages, authenticated: authenticated});
})

exports.index_post = [
    body("message", "Message must not be empty").trim().isLength({ min: 1 }).escape(),
    asyncHandler(async (req, res, next) => {
        const errors = validationResult(req);
        const message = new Message({
            text: req.body.message,
            user_name: req.user,
        })

      if (!errors.isEmpty() && !req.isAuthenticated()) {
        // There are errors.
        const messages = await Message.find();
        res.render('index', {messages: messages,errors: errors});
        return;
      } else {
        // Data from form is valid
        if ( req.isAuthenticated()){
            await message.save();
            res.redirect('/');
        }
      }
    })
]


