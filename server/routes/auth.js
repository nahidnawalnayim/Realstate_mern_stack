const router=require('express').Router();
const  {registerController, loginController, logout} =require('../controller/authController');
const {getusers, getUserbyId }=require('../controller/userController')
router.post('/register',registerController);
router.post('/login',loginController);
router.post('/logout',logout);
router.get('/users',getusers);
router.get('/user/:userId',getUserbyId);

module.exports=router;