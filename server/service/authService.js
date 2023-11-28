const bcrypt= require('bcrypt');
const jwt = require('jsonwebtoken')
const {createUser,findUserbyProp}= require('./userService');
const User = require('../model/userModel');
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
    let user = await findUserbyProp("email", email);
  if (!user) {
    throw Error("user not found.");
  }
  /**
   * Comparing password from req.body with user.password in database
   */
  const ismatched =await bcrypt.compare(password, user.password);
  if (!ismatched) {
    throw Error("Invalid credentials!!");
  }
  const payload = {
    _id:user._id,
    email: user.email,
    password: user.password,
    // accountStatus:user.accountStatus
  };
 jwt.sign(payload, "secret-key", { expiresIn: "2h" });
 return payload;
}
module.exports={registerService,loginService};