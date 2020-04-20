const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const config=require('../config/database');
const Prevoznik=require('./prevoznik');


const RoutesSchema=mongoose.Schema({
   
    uZemlji:{
        type:Boolean
    },
    vremePolaska:{
        type:String,
        require:true
    },
    ruta:{
        type: [String],
        require:true
    },
    imePrevoznika:{
        type:String
        //require:true
    }

});

const Ruta=module.exports=mongoose.model('Ruta',RoutesSchema);

module.exports.addPutanja=function(newPutanja,callback){
    newPutanja.save(callback);
}
module.exports.getRute=function(prevoznik,callback){

    Ruta.find({
        '_id':{$in:prevoznik.rute}
    }).exec(callback);

}
module.exports.findAllRoutes=function(putanja,callback){
    //if(query.title!=undefined)//proveravamo dal i je vrsena pretraga
    //ako jeste dodajemo karaktere koji ce traziti svaki naslov koji je slican unesenom
      //  query.title={ '$regex' : query.title, '$options' : 'i' }  ;
    Ruta.find({'ruta':{$in:putanja}}).populate().exec(callback);

}