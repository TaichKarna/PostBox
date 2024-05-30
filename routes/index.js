var express = require('express');
var router = express.Router();
const signUp = require('../controllers/signUpController')
const loginController = require("../controllers/loginController")
const passport = require('passport')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sign-up', signUp.signup_get);
router.post('/sign-up', signUp.signup_post);

router.get('/login', loginController.login_get);
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/sign-up"
  })
);

router.get("/log-out", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});


module.exports = router;
