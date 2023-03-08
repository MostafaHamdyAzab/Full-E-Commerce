const express=require('express');
const Router=express.Router();
const {getProduct}=require('../controller/productController')
const homeController=require('../controller/homeController');

Router.get('/',homeController.getAllProducts);
Router.get('/:id',getProduct);

module.exports=Router;