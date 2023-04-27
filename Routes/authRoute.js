const express=require('express');
const Router=express.Router();
const authController=require('../controller/authController');
const isAuth=require('../middelware/isAuth');

Router.get('/signup',authController.getSignUp);
Router.post('/signup',authController.postSignUp);
Router.get('/login',isAuth.notAuth,authController.getLogin);
Router.post('/login',authController.postLogin);
Router.all('/logout',isAuth.isAuth,authController.logout)
// Router.get('/login',authController.getLogin);

module.exports=Router;