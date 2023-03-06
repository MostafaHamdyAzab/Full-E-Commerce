const express=require('express');
const app=express();
const path=require('path');
const db=require('./config/db');
app.use(express.json());
const homeRoute=require('./Routes/homeRoute');
const catsRoute=require('./Routes/catsRoute');
const productRoute=require('./Routes/productRoute');

app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'images')));
app.use(homeRoute);
app.use('/cats',catsRoute);
app.use('/product',productRoute);
app.set('view engine','ejs');
app.set('views','views');

// app.get('/',(req,res,nxt)=>{
//    res.render('index');
// })
app.listen(3006,(err)=>{
    if(err){
        console.log(err);
    }

})