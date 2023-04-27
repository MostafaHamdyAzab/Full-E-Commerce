const Router=require('express').Router();
const userHomeController=require('../controller/userHomeController');


Router.get('/userHome',userHomeController.getUserHome);
// Router.get('/',homeController.addProduct);

module.exports=Router;