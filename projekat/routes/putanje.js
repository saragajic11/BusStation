const express=require('express');
const router=express.Router();
const passport=require('passport');
const Ruta=require('../models/rute');
const Prevoznik=require('../models/prevoznik');

router.get('/find/:grad',(req,res,next)=>{
    Ruta.findAllRoutes(req.params.grad,(err,rute)=>{
        if(err){
            //console.log(err);
            return res.status(500).send("Server error!");
        }
        //console.log(rute);
        //saljemo sve pronadjene
        return res.status(200).json({obj:rute});
    });
})
//za brisanje putanje
router.post('/delete',passport.authenticate('jwt', { session: false }),(req,res,next)=>{
    if(req.user.admin!=1)
        return res.status(403).send("You are not an admin!");

    const putanjaZaBrisanje=req.body;

    console.log(putanjaZaBrisanje._id);
    Prevoznik.find({'rute':{$in:putanjaZaBrisanje._id.toString()}},(err,prevoznik)=>{
        if(err)
            throw err;
        else{
            //zasto je ovo undefined?
            console.log("Prevoznik:"+prevoznik);
            console.log(JSON.stringify(prevoznik[0].rute));
            console.log(putanjaZaBrisanje._id);


            var index=prevoznik[0].rute.indexOf(putanjaZaBrisanje);
             if (index > -1) {
                prevoznik[0].rute.splice(index, 1);
            }
            Ruta.findById(putanjaZaBrisanje).remove((err)=>{
                if(err)
                   return res.status(500).send("Server error!");
                });
                return res.json({success:true,msg:"Putanja obrisana!"});
        }

    })
})
module.exports=router;