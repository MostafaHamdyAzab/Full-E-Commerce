const express=require('express');
const app=express();
const path=require('path');
const db=require('./config/db');
const bodyParser=require('body-parser');
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
const homeRoute=require('./Routes/homeRoute');
const catsRoute=require('./Routes/catsRoute');
const productRoute=require('./Routes/productRoute');
const authRoute=require('./Routes/authRoute');

app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'images')));

app.use(homeRoute);
app.use('/cats',catsRoute);
app.use('/product',productRoute);
app.use('/auth',authRoute);
app.set('view engine','ejs');
app.set('views','views');

app.post('/auth/signup',(req,res,nxt)=>{
   console.log(req.body);
   res.send(req.body);
})
app.listen(3006,(err)=>{
    if(err){
        console.log(err);
    }

})