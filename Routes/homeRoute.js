const router=require('express').Router();
const homeController=require('../controller/homeController');

router.get('/',homeController.getAllProducts);

module.exports=router