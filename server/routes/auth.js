const router=require('express').Router();
const  {registerController, loginController, logout} =require('../controller/authController');
const postController = require('../controller/postController');
const {getusers, getUserbyId }=require('../controller/userController')
router.post('/register',registerController);
router.post('/login',loginController);
router.post('/logout',logout);
router.get('/users',getusers);
router.get('/user/:userId',getUserbyId);
router.post('/newproject', postController);
module.exports=router;