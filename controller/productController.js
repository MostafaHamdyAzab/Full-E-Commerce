const productModel=require('../models/productsModel');

exports.getProduct=((req,res,nxt)=>{
    const id=req.params.id;
    productModel.findById(id)
    .then((data)=>{
        res.render('../views/product.ejs',{product:data});
    })
    .catch((err)=>{
        console.log(err);
    })
});

