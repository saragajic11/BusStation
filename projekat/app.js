//uvodimo dependencie
const express=require('express');
const path=require('path');
const bodyParser=require('body-parser'); //parsira dolazeci body request-a
const cors=require('cors');
const passport=require('passport');
const mongoose=require('mongoose');
const config=require('./config/database');

//povezujemo sa bazom
//u zagrade se smesta putanja nase baze, ali napravicemo poseban fajl u koji cemo staviti bazu(config folder)
mongoose.connect(config.database, { useNewUrlParser: true });

//proveravamo da li je konektovano ili je doslo do greske
mongoose.connection.on('connected',()=>{
    console.log('Connected do database ',config.database);
});
mongoose.connection.on('error',(err)=>{
    console.log('Database error ',err);
});

const app=express();//INICIJALIZUJEMO APLIKACIJU SA EXPRESSom

const users=require('./routes/users'); //uvodimo rute iz foldera routes/users

const prevoznici=require('./routes/prevoznici');

const rezervacije=require('./routes/rezervacije');

const putanje=require('./routes/putanje');

//const putanja=require('./routes/putanja');

app.use(cors()); //dozvoljava nam da napravimo request ka API sa razlicitih domenskih imena
//govorimo serveru da prikazuje angular aplikaciju ng build
app.set('views', __dirname + '/public');
app.set('view engine', 'html');


//body parser middleware
app.use(bodyParser.json());

//namesticemo static folder-mesto u kom cemo smestati client-side files(to ce biti nas angular)
app.use(express.static(path.join(__dirname,'public'))); //dirname-trenutno ime direktorijuma, posle zareza ide ime foldera kakvo zelimo

//podesavamo passport middleware-za autentifikaciju i tokene
//za sta ova dva tacno sluze?
//passport-jwt je passport strategy koja se koristi za autentifikaciju sa tokenom
//kreiracemo jedan fajl u config fajlu
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

const port= process.env.PORT || 8080;

//imamo jednu rutu koju koristimo za homepage
/*app.get('/',(req,res)=>{
    res.send('Invalid endpoint');
});*/
//sve rute sajta ce pokazivati na angular aplikaciju

app.use('/user',users); //sve sto stigne na rutu users se smesta u taj fajl (?)

app.use('/prevoznik',prevoznici);
app.use('/rezervacije',rezervacije);
app.use('/putanje',putanje);

app.get('**',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html');
});

//app.use('/putanja',putanja);

app.listen(port,function(){
    console.log('Server started on port '+port); 
});