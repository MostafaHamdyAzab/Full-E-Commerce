const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const catsSchema=new Schema({
    name:{
        type:String,
        required:(true,"Name Is Required"),
        min:3,
        max:50
    },image:{
        type:String
    },slug:{
        type:String
    }
},{timestamps:true}) 
const Cats=mongoose.model('cat',catsSchema);
module.exports=Cats;