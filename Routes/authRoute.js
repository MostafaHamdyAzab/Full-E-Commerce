const express=require('express');
const bodyParser=require('body-parser');
const Router=express.Router();
const authController=require('../controller/authController');

Router.get('/signup',authController.getSignUp);
// Router.post('/signup',authController.postSignUp);
Router.get('/login',authController.getLogin);
// Router.get('/login',authController.getLogin);

module.exports=Router;