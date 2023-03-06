const express=require('express');
const Router=express.Router();
const {getProduct}=require('../controller/productController')

Router.get('/:id',getProduct);

module.exports=Router;