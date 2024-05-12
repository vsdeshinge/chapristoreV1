const express = require('express');

const dotEnv = require('dotenv');


process.on('uncaughtException', err =>{
  console.log('Uncaught Exception shutting down');
  console.log(err.name, err.message);

  
    process.exit(1)
  
})



dotEnv.config({path:'./config.env'});
const mongoose  = require('mongoose');
const app = require('./app')






const DB= process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD);
console.log(DB)



mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('DB connection successful'));

















const server = app.listen(process.env.PORT,() =>{
    console.log(`listening from port number`);
});



process.on('unhandledRejection', err=>{
  console.log(err.name, err.message);
  console.log("unhandled rejection ")
  server.close(() =>{
    process.exit(1)

  })
  
});



