const userModel=require('../models/usersModel');
const bcrypt=require('bcrypt');
let errors="";

exports.getSignUp=((req,res,nxt)=>{
    errors="";
    res.render('../views/signup.ejs',{errors:errors});
});

exports.postSignUp=((req,res,nxt)=>{

        userModel.findOne({email:req.body.email})
        .then((user)=>{
            if(user){
                errors="Sorry Email Is Used Before";
                res.status(400).render("../views/signup.ejs",{errors:errors});
            }else{
                            //encrypt passsword
                bcrypt.hash(req.body.password,10).then((hashedPass)=>{
                        const newUser=new userModel({firstName:req.body.firstName,lastName:req.body.lastName,email:req.body.email,userName:req.body.userName,password:hashedPass});
                        newUser.save().then((data)=>{
                            res.status(200).render('../views/login',{errors:errors});
                        })
                        .catch((err)=>{
                            res.send(err,"Error in Bcrypt");
                        })
                }).catch((err)=>{
                    console.log(err);
                })
               
            }
        })

    .catch((err)=>{
        console.log(err);
    })
});

exports.getLogin=((req,res,nxt)=>{
    errors="";
    
    res.render('../views/login.ejs',{errors:errors});
});

exports.postLogin=( (req,res,nxt)=>{
    userModel.findOne({email:req.body.email})
        .then((user=>{
           if(!user){
            errors="Sorry Email Not Found";
            req.flash('emailErr',"Sorry Email Not Found");
            // console.log(req.flash('emailErr'));
            res.render('../views/login.ejs',{errors:req.flash('emailErr')}); 
           }else{
            bcrypt.compare(req.body.password,user.password)
            .then((matched)=>{
                if(matched){
                    console.log(user._id);
                    req.session.user=user;
                    req.session.isLoggedIn=true;
                    return req.session.save(err=>{
               
                        res.redirect('/');
                    })
                    // res.render('../views/home.ejs',{errors:errors});
               
                }else{
                   errors="Sorry, Password Not Correct";
                   req.flash('passwordErr',"Sorry, Password Not Correct");
                   res.render('../views/login.ejs',{errors:req.flash('passwordErr')});
                }
            })

           }
        }))
        .catch((err)=>{
            console.log(err);
        })
});

exports.logout=((req,res,nxt)=>{
    req.session.destroy(()=>{
        req.isAuth=false;
       res.redirect('/');
    })
});