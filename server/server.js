const express = require('express');

const dotEnv = require('dotenv');
dotEnv.config({path:'./config.env'});
const mongoose  = require('mongoose');
const app = require('./app')







const DB= process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD);
console.log(DB)



mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('DB connection successful'))
  .catch((err) => console.error('Error connecting to DB:', err));

















app.listen(process.env.PORT,() =>{
    console.log(`listening from port number`);
});