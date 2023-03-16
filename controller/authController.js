const userModel=require('../models/usersModel');
const bcrypt=require('bcrypt');
let errors="";
exports.getSignUp=((req,res,nxt)=>{
    res.render('../views/signup.ejs',{errors:errors});
});

exports.postSignUp=((req,res,nxt)=>{
    console.log(req.body);
 

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
                            res.status(200).send(data);
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
})
exports.getLogin=((req,res,nxt)=>{
    res.render('../views/login.ejs');
});