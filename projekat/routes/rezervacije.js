const express=require('express');
const router=express.Router();
const passport=require('passport');
const Rezervacija=require('../models/rezervacija');
const Ruta=require('../models/rute');

router.post('/add',passport.authenticate("jwt",{session:false}),(req,res,next)=>{
    const user=req.user; //ovako dobijam ulogovanog usera
    const imeprevoznika=req.body.prevoznik;
    //console.log("Ime prevoznika "+imeprevoznika);
    const dat=req.body.datumPolaska;
    const destin=req.body.destinacija;
    const vreme=req.body.vremePolaska;

    const novaRezervacija=new Rezervacija({
        userID:user._id,
        prevoznik:imeprevoznika,
        destinacija:destin,
        datumPolaska:dat,
        vremePolaska:vreme
    })

    //console.log("Nova rezervacija:"+novaRezervacija);
    novaRezervacija.save((err)=>{
        if(err){
            return res.status(500).json({msg:"Reservation failed"});
        }
        return res.json(novaRezervacija);
    })
})
//ovome moze da pristupi samo ulogovan korisnik
router.get('/findspecified',passport.authenticate("jwt",{session:false}),(req,res,next)=>{
    //nadji mi rezervaciju koja sadrzi id odredjenog usera
    Rezervacija.find({userID:req.user._id.toString()},(err,rezervacije)=>{
        if(err){
            return res.status(500).json({msg:"Error"});
        }
        return res.json(rezervacije);
        
    })
})

router.get('/findAll',passport.authenticate("jwt",{session:false}),(req,res,nest)=>{
    if(req.user.admin!=1)
        return res.status(403).send("You are not an admin!");
    Rezervacija.find((err,rezervacije)=>{
        if(err){
            return res.status(500).json({msg:"Error"});
        }
        return res.json(rezervacije);
    })
})
module.exports=router;