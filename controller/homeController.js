const productsModel=require('../models/productsModel');
const catsModel=require('../models/catsModel');


exports.getAllProducts=(async(req,res,nxt)=>{
    const cats=await catsModel.find({});
    req.flash('cats',cats);
    const filter=req.query.cat;
    if(!filter||filter =='all'){
       
        const products=await productsModel.find({});
        if(cats&&products){
            res.render('../views/index.ejs',{products:products,cats:cats});
        }else{
            res.status(404).json("Sorry get an error since cats Or Products ");
        }
      
    }else{
        productsModel.find({cat:filter})
        .then((data)=>{
            return res.render('../views/index.ejs',{products:data,cats:cats});
        })
        .catch((err)=>{
            console.log(err);
        })
    }
      

        
});

exports.addProduct=((req,res,nxt)=>{
    productsModel.create({
        name:"test1",
        price:22,
        image:"1.jpg",
        cat:"clothes",
        desc:"The First Product"
    });
    res.render('../views/index.ejs');
});