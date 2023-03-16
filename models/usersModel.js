const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const userSchema=new Schema({
    firstName:{
        type:String,
        min:3,
    },
    lastName:{
        type:String,
        min:3
    },
    userName:{
        type:String,
        required:true,
        min:3,
        unique:[true,"User NNmame Already Exists"]
    },
    email:{
        type:String,
        required:true,
        pattern:['[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$',"You must use valid email pattern"],
        unique:[true,"This Email is Tokem"]
    
    },
    password:{
        type:String,
        required:true,
        min:(5,"Password length Must Be Greater Than 5")
    }
},{timestamps:true});

const users=mongoose.model('user',userSchema);
module.exports=users;