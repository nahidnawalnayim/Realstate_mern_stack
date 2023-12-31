const {registerService,loginService} = require("../service/authService");
const User = require("../model/userModel");
const bcrypt = require("bcrypt");
const { findUserbyProp } = require("../service/userService");
const registerController = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ message: "Please fillup the form to register." });
  }
  try {
    const user = new User({ name, email, password });
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    user.password = hash;
    await user.save();
    return res.status(201).json({ message: "new user created.", user });
  } catch (e) {
    console.log(e);
    next(e);
  }
};

const loginController=async(req,res,next)=>{
  const {email, password}=req.body;
  try{
    let token=await loginService({email,password});
    return res.status(200).json(token);
  }catch(e){
    next(e);
    
  }
}

const logout=async(req,res)=>{
  res.cookie('token', '',{
    httpOnly: true,
    expires: new Date(0)
  } );
  res.status(200).json({message: 'Logged out'});
}

module.exports = {registerController, loginController, logout};
