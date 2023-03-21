
//this for sitting privilages for users
module.exports=((req,res,nxt)=>{
if(!req.session.isLoggedIn){
    res.redirect('/');
}
nxt();
});