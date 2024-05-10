const express = require('express');
const loginSignUpController = require('./../controllers/loginSignUpController')


const router = express.Router();


router
    .route('/login')
    .post(loginSignUpController.getlogin);


router
    .route('/signup')
    .post(loginSignUpController.getSignUp);


module.exports = router