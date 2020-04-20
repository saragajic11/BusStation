const express=require('express');
const router=express.Router();
const User=require('../models/user');
//importujemo model prevoznika
const Prevoznik=require('../models/prevoznik');
const passport=require('passport');
const jwt=require('jsonwebtoken');

const config=require('../config/database');

//register
router.post('/register',(req,res,next)=>{ //users ne stavljam u okviru rute posto se to samo generise
    let newUser=new User({
        name:req.body.name,
        email:req.body.email,
        username:req.body.username,
        password:req.body.password

    });

    User.addUser(newUser, (err,user)=>{
        if(err){
            if (err.name === 'MongoError' && err.code === 11000)//mongodb greska
            return res.json({success:false, msg:'User already exists!'});

            else 
                return res.json({success:false, msg:'Failed to register!'});
        }
        //ako nema nikakve greske
        return res.json({success:true, msg:'User created'});
    });
});
router.post('/login',(req,res,next)=>{
    const email=req.body.email;
    const password=req.body.password;

    User.getUserByUserEmail(email, (err,user)=>{
        if(err){
            throw err;
        }
        if(!user){
            return res.json({success:false, msg:'User not found'});
        }
        User.comparePassword(password, user.password, (err, isMatch)=>{
            if(err) throw err;
            if(isMatch){
                const token = jwt.sign({data: user} ,config.secret, {expiresIn: 604800});
                return res.status(200).json({token:'Bearer '+ token ,user:{name:user.name,username:user.username,email:user.email,admin:user.admin}
                });
            } else {
                return res.json({success:false, msg:'Wrong password'});
                
            }
        });
    });
});
//kad god zelis da zastitis neku rutu, stavi ovo passport.authenticate..kao drugi parametar
router.get('/profile', passport.authenticate('jwt', {session:false} ),(req,res,next)=>{
    res.send(req.user);
});



module.exports=router;