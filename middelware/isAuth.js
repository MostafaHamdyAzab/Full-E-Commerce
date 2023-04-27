
//this for sitting privilages for users
exports.isAuth=((req,res,nxt)=>{
if(!req.session.isLoggedIn){
    res.redirect('/auth/login');
   
}else{
    nxt();
}

});


exports.notAuth=((req,res,nxt)=>{
    if(req.session.isLoggedIn){
        res.redirect('/userHome');
       
    }else{
        nxt();
    }
    
    });