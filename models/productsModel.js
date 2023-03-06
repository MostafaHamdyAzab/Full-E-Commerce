const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const productMode=new Schema({
    name:{
        type:String
    },
    price:{
        type:Number
    },
    image:{
        type:String
    },
    cat:{
        type:String
    },
    desc:{
        type:String
    }
},{timestamps:true});

const Products=mongoose.model('product',productMode);
module.exports=Products;