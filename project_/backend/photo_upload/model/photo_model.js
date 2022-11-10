const mongoose=require('mongoose');

const Schema = mongoose.Schema;
const userSchema= new Schema({
    name:{
        type:String,
        required:true
    },

    photo:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
       
    },
    adress:{
        type:String,
        required:true

    }

});
const User=mongoose.model('User',userSchema)
module.exports=User;