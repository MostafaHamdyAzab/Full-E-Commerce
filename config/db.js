const mongoose=require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/online-shop')
    .then(conn=>{
        console.log("Connected Successfully To",conn.connection.host);
    }).catch((err)=>{
        console.log(err);
    })