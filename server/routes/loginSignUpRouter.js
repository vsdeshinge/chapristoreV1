const express = require('express');
const loginSignUpController = require('./../controllers/loginSignUpController')


const router = express.Router();


router
    .route('/login')
    .post(loginSignUpController.getlogin);


router
    .route('/signup')
    .post(loginSignUpController.getSignUp);


router
    .route('/men')
    .get(loginSignUpController.men)
    .post(loginSignUpController.men2)


module.exports = router