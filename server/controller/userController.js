const userService=require('../service/userService');

const getusers=async(req,res,next)=>{
    try{
        let user=await userService.findUser();
       return res.status(200).json(user);
    }catch(e){
        next(e);
    }
}

const getUserbyId=async(req,res,next)=>{
    let userId=req.params.userId;
    try{
        let user=await userService.findUserbyProp("_id", userId);
       if(!user){
        throw Error("No User found with this id.");
       }
        res.status(200).json(user);
    }catch(e){
        next(e);
    }
}
module.exports={getusers, getUserbyId }