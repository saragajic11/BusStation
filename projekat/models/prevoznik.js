const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const config=require('../config/database');

var Schema=mongoose.Schema
const RoutesSchema=require('../models/rute');

//pravim semu prevoznika
const prevoznikSchema=mongoose.Schema({

    id:{
        type: Number,
        unigue:true,
        require:true

    },
    imePrevoznika:{
       type: String,
       unigue:true,
       require:true
    },
    kontakt:{
        type:String,
        unigue:true,
        require:true
    },
    rute:{
        //niz id-eva
        type:[Schema.Types.ObjectId],
        require:true
    }
});

const Prevoznik=module.exports=mongoose.model('Prevoznik',prevoznikSchema);

module.exports.addPrevoznik=function(newPrevoznik,callback){
    newPrevoznik.save(callback);
}
module.exports.getPrevoznikById=function(id,callback){
    Prevoznik.findById(id,callback);
}
//exec sluzi da bi izvrsio pretragu..
module.exports.findAllPrevoznik=function(callback){
    Prevoznik.find().exec(callback);
}