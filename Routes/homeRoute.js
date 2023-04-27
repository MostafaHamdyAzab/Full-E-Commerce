const Router=require('express').Router();
const homeController=require('../controller/homeController');
const auth_mw=require('../middelware/isAuth');


Router.get('/',homeController.getAllProducts);
// Router.get('/',homeController.addProduct);

module.exports=Router;