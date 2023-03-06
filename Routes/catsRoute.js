const router=require('express').Router();
const catsController=require('../controller/catsController');

router.get('/',catsController.getAllCats);
// router.get('/',catsController.addCat);

module.exports=router;