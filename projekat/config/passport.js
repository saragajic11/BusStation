const JwtStrategy=require('passport-jwt').Strategy;
const ExtractJwt=require('passport-jwt').ExtractJwt;

const User=require('../models/user');
const config=require('../config/database');

module.exports=function(passport){
    var opts={};
    //ekstraktujemo jwt iz bearer tokena (???)
    opts.jwtFromRequest=ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey=config.secret;
    passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
        //iz datog tokena uzimamo id korisnika i trazimo ga u bazi podataka
        //console.log(jwt_payload);
        //ovo sa jwt_payload._id je ispravljeno, tako je u tim novijim verzijama.....
        User.getUserById(jwt_payload.data._id, function(err, user) {
            console.log(jwt_payload);
            //ako je doslo do greske
            if (err) {
                return done(err, false);
            }
            //vracamo podatke korisnika ako je pronadjen -> req.user (u radu s rutama)
            //postavljamo null za gresku (ako greske nema)
            if (user) {
                return done(null, user);
            }//ako nije pronadjen korisnik s tim tokenom, znaci da se nije logovao
            else {
                return done(null, false);
            }
        });
    }));


}