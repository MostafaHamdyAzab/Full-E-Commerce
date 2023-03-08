const userModel=require('../models/usersModel');

exports.getSignUp=((req,res,nxt)=>{
    res.render('../views/signup.ejs');
});

exports.postSignUp=((req,res,nxt)=>{
    console.log(req.body);
    res.send(req.body);
})
exports.getLogin=((req,res,nxt)=>{
    res.render('../views/login.ejs');
});