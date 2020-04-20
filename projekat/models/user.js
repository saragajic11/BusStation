const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const config=require('../config/database');

//pravimo korisnicku semu
//ovo se moze menjati, dodavati, poboljsavati i slicno
const userSchema=mongoose.Schema({
    name:{
        type:String
    },
    username:{
        type:String,
        require:true,
        unique: true
    },
    email:{
        type:String,
        require:true,
        unique: true
    },
    password:{
        type:String,
        require:true
    },
    admin:{
        type:Number,
        default:0
    }
});

//pravimo je i zelimo da je koristimo spolja
const User=module.exports=mongoose.model('User',userSchema);

module.exports.getUserById=function(id,callback){
    User.findById(id,callback);

}
module.exports.getUserByUsername=function(username,callback)
{
    const query={username:username};
    User.findOne(query,callback);
}

module.exports.getUserByUserEmail=function(email,callback){
    const query={email:email};
    User.findOne(query,callback);
}


module.exports.addUser=function(newUser,callback){
    //generate Salt=random key,used to cash password
    //10 means 10 rounds..
    //imamo i callback funkciju..
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(newUser.password,salt,(err,hash)=>{ //hash prima sifru, salt i callback
            if(err)throw err;
            newUser.password=hash; //sifru koju je ukucao korisnik smestamo u hash
            newUser.save(callback);
        });
    });
}
module.exports.comparePassword=function(candidatePassword,hash,callback){
    bcrypt.compare(candidatePassword,hash,(err,isMatch)=>{
        if(err)throw err;
        callback(null,isMatch);
    });
}