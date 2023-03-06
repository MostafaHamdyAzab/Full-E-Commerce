const catsModel=require('../models/catsModel');
const slugify=require('slug');

exports.getAllCats=((req,res,nxt)=>{
    catsModel.find({})
    .then((data) => {
        // console.log(data);
        return res.render('../views/cats.ejs',{cats:data});
        
    }).catch((err) => {
        
    });

        
})

exports.addCat=((req,res,nxt)=>{
    catsModel.create({
        name:"clothes",
        slug:slugify('clothes'),
        image:"1.jpg"
    });
    res.render('../views/cats.ejs',{cats:data});
})