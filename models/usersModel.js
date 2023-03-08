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
    email:{
        type:String,
        required:true,
    
    },
    password:{
        type:String,
        required:true,
        min:(5,"Password length Must Be Greater Than 5")
    }
},{timestamps:true});

const users=mongoose.model('user',userSchema);
module.exports=users;