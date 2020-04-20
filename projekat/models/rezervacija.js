const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const config=require('../config/database');

var Schema=mongoose.Schema

const rezervacijeSchema=mongoose.Schema({
    //moj model treba da ima: userID, vreme(datum)polaska, zeljenu destinaciju, i prevoznika
    /*rutaID:{
        type:Schema.Types.ObjectId,
        ref:'Ruta',
        require:true
    },*/
    userID:{
        type:Schema.Types.ObjectId,
        ref:'User',
        require:true
    },
    prevoznik:{
        type:String,
        require:true
    },
    destinacija:{
        type:[String],
        require:true
    },
    datumPolaska:{
        type:Date,
        require:true
    },
    vremePolaska:{
        type:Date,
        require:true
    }
});

const Rezervacija=module.exports=mongoose.model('Rezervacija',rezervacijeSchema);
