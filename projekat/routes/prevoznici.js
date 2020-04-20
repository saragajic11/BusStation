const express=require('express');
const router=express.Router();

const Prevoznik=require('../models/prevoznik');
const Putanja=require('../models/rute');
const passport=require('passport');
const jwt=require('jsonwebtoken');

const config=require('../config/database');

//pravim rutu za dodavanje prevoznika
router.post('/add',passport.authenticate('jwt', { session: false }),(req,res,next)=>{
    if(req.user.admin!=1){
        return res.status(403).send("You are not an admin!");
    }

    let newPrevoznik=new Prevoznik({
        imePrevoznika:req.body.imePrevoznika,
        kontakt:req.body.kontakt,
        rute:req.body.rute,
        id:req.body.id
    });
    Prevoznik.addPrevoznik(newPrevoznik,(err,prevoznik)=>{
        if(err){
            if (err.name === 'MongoError' && err.code === 11000)//mongodb greska
            return res.json({success:false, msg:'Prevoznik vec postoji!'});

            else 
                return res.json({success:false, msg:'Greska!'});
        }
        //ako nema nikakve greske
        return res.json({success:true, msg:'Prevoznik kreiran!'});
    });
})

//putanja za izlistavanje prevoznika
router.get('/get',(req,res,next)=>{
    Prevoznik.findAllPrevoznik((err,prevoznici)=>{
        if(err){
            return res.json({success:false,msg:"Error!"});
        }
        else{
            return res.json({success:true,obj: prevoznici});
        }
    })
})

router.post('/delete',passport.authenticate('jwt', { session: false }),(req,res,next)=>{
    if(req.user.admin!=1)//minimum admin nivoa 1
        return res.status(403).send("You are not an admin!");
    //uzimamo poslati apartman od strane front-enda
    var prev=new Prevoznik(req.body);
    //brisemo apartman iz baze podataka
    const putanje=prev.rute;
    prev.remove((err)=>{
        if(err)
            return res.status(500).send("Server error!");
    });
    putanje.forEach((putanja)=>{
        Putanja.findByIdAndRemove(putanja,(err,p)=>{
            if(err){
                return res.status(500).send("Server error!");
            }
        });
    })
    return res.json({success:true,msg:"Prevoznik obrisan!"});
})
//ruta za dodavanje putanje
router.post('/addputanja',passport.authenticate('jwt', { session: false }),(req,res,next)=>{
    if(req.user.admin!=1)//minimum admin nivoa 1
        return res.status(403).send("You are not an admin!");
        
    var putanja=req.body.putanja; //uzmes putanju-niz id-eva
    var prevoznikID=req.body.prevoznik;
    //putanja je to sto je prosledjeno
    //novaPutanja je objekat koji nastaje iz toga sto je prosledjeno, i sto ima id
    let novaPutanja=new Putanja(putanja);
    //console.log(req.body.putanja);
    Putanja.addPutanja(novaPutanja,(err)=>{
        if(err){
            return res.json({success:false,msg:"Greska!"});
        }
    
        Prevoznik.getPrevoznikById(prevoznikID.toString(),(err,prev)=>{
        if(err){
            throw err;
        }
        if(!prev){
            return res.json({success:false,msg:"Prevoznik nije pronadjen"});
        }
        novaPutanja.imePrevoznika=prev.imePrevoznika;
        novaPutanja.save();
        //console.log(novaPutanja.imePrevoznika);
        prev.rute.push(novaPutanja._id);
        prev.save();

        //console.log(novaPutanja._id);
        return res.json({success:true, msg:"ID putanje je dodat u Prevoznika"});
    });
    });
})
//putanja za iscitavanje ruta
router.get('/getputanja/:id',(req,res,next)=>{

    //ovo mora ovoako..
    var prevoznikID=req.params.id
    //console.log(req.params.id);


    Prevoznik.getPrevoznikById(prevoznikID.toString(),(err,prev)=>{
        if(err){
            throw err;
        }
        if(!prev){
            return res.json({success:false,msg:"Prevoznik nije pronadjen"});
        }
        Putanja.getRute(prev,(err,rute)=>{
        if(err){
            return res.json({success:false,msg:"Error!"});
        }
        else{
            return res.json({success:true,obj: rute});
        }
    })
})
});
module.exports=router;