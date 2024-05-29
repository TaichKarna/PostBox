var express = require('express');
var router = express.Router();
const signUp = require('../controllers/signUpController')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sign-up', signUp.signup_get);
router.post('/sign-up', signUp.signup_post);

module.exports = router;
