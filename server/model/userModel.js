const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        minlength: [6, "password is too short"],
        required: true
    }
})
const User=mongoose.model("user model", userSchema);
module.exports=User;