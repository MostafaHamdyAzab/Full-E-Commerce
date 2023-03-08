const Router=require('express').Router();
const homeController=require('../controller/homeController');

Router.get('/',homeController.getAllProducts);
// Router.get('/',homeController.addProduct);

module.exports=Router;