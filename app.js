const express=require('express');
const app=express();
const path=require('path');
const db=require('./config/db');
const bodyParser=require('body-parser');
const session=require('express-session');
const sessionStore=require('connect-mongodb-session')(session);
const flash=require('connect-flash');

const theSessionStrore=new sessionStore({
    uri:"mongodb://localhost:27017/online-shop",
    collection:"session"
});


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
const homeRoute=require('./Routes/homeRoute');
const userHomeRoute=require('./Routes/userHomeRoute');
const catsRoute=require('./Routes/catsRoute');
const productRoute=require('./Routes/productRoute');
const authRoute=require('./Routes/authRoute');
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'images')));
app.use(session({
    secret:"The session secret KEy"
    ,saveUninitialized:false          
    ,store:theSessionStrore
    ,resave:true
    ,cookie:{
        //put the max age here
    }
}));

app.use((req, res, next) => {
    res.locals.isAuthenticated = req.session.isLoggedIn;
    next();
});

app.use(flash());
app.use(homeRoute);
app.use(userHomeRoute);
app.use('/cats',catsRoute);
app.use('/product',productRoute);
app.use('/auth',authRoute);
app.set('view engine','ejs');
app.set('views','views');
 
    //Stroing The session

app.listen(3006,(err)=>{
    if(err){
        res.send(err);
    }

})