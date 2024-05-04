const mongoose = require('mongoose');

const dotEnv = require('dotenv');
dotEnv.config({path:'./config.env'});
// this shoulbe the above the app because it should read first all the config data and it is applicable for all the files ones it is read here just we have to use process.env.{environment variable name}

const app = require('./app')
const  PORT =8000;


//console.log(app.get('env'));
// console.log(process.env);


const DB= process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD);
mongoose
    .connect(DB,{
        useNewUrlParser : true,
        useCreateIndex: true,
        useFindAndModify: false
    }).then(() => console.log('DB connection successful'));

// mongoose
//     .connect(process.env.DATABASE_LOCAL,{
//         useNewUrlParser : true,
//         useCreateIndex: true,
//         useFindAndModify: false
//     }).then(() => console.log('DB connection successful'));





/* this is for local database^^^*/

// here also we used environ mental variable
app.listen(process.env.PORT  ,()=>{
    console.log(`listening from port number ${PORT}`);
});

// this file is defining out environmental variables and other things its starting point of our app

// to run this file we changed the package json configuration script : start = " nodemon server.js"

// to run type npm start directly instead of nodemon server.js

  