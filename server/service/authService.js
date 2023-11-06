const bcrypt= require('bcrypt');
const jwt = require('jsonwebtoken')
const {createUser,findUserbyProp}= require('./userService')
const registerService=async ({name,email,password})=>{
    const user= await findUserbyProp("email", email);
    if(user){
        throw Error("User already exist !!");
    }
    const salt=await bcrypt.genSalt(10);
    const hash=await bcrypt.hash(password,salt);
    return createUser({name,email,password:hash});
}

const loginService=async({email,password})=>{
    let user=await findUserbyProp("email", email);
     if(!user){
        throw Error("User not found!!");
     }
     const isMatched=await bcrypt.compare(password,user.password);
     if(!isMatched){
        throw Error("Invalid Credentials !!");
     }
}
module.exports={registerService,loginService};