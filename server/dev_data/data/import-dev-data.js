const fs= require('fs');
const mongoose = require('mongoose');
const Tour = require('./../../models/productModel');

const dotEnv = require('dotenv');
dotEnv.config({path:'/Users/vivekanandshridhardeshinge/chapristoreV1/server3/config.env'});
// this should be the above the app because it should read first all the config data and it is applicable for all the files ones it is read here just we have to use process.env.{environment variable name}




//console.log(app.get('env'));
// console.log(process.env);


const DB= process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD);
console.log(DB);

mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('DB connection successful'))
  .catch((err) => console.error('Error connecting to DB:', err));


// it is json we should convert it to javascript file
const tour = JSON.parse(fs.readFileSync(`${__dirname}/productData.json`,'utf-8'));

//Import  a data from a file

const importData = async()=>{
    try{
        await Tour.create(tour);
        console.log("data loaded succesfully")
    }catch(err){
        console.log(err);
    }
};

//Delete all data from db

const deleteData = async()=>{
    try{
        await Tour.deleteMany();
        console.log('Data successfully deleted!');

    }catch(err){
        console.log(err);
    }
}

//console.log(process.argv);  this is to print arguments and add arguments from the command line soo we need to give import and delete option from the command line


if(process.argv[2] ==='--import'){
    importData();
    console.log("Data successfully Added")
}
else if(process.argv[2] == '--delete'){
    deleteData(" Data successfully Deleted");
}
