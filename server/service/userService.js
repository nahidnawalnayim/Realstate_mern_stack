const User=require('../model/userModel');
const findUser=()=>{
    return User.find();
}
const findUserbyProp=(key,value)=>{
    if(key=== '_id'){
        return User.findById(value)
    }
return User.findOne({[key]: value})
}
module.exports={ findUser, findUserbyProp }