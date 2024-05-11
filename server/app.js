const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const cors = require('cors');
const AppError = require('./utils/appError');
const erroController = require('./controllers/errorController')


const Product = require('./models/productModel')
const productRouter =require('./routes/productRoutes')
const userRouter =require('./routes/userRoutes')
const loginSignUpRouter = require("./routes/loginSignUpRouter")



const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use(cors());





app.use('/',loginSignUpRouter);
app.use('/api/v1/products',productRouter);
app.use('/api/v1/users',userRouter);

app.all('*',(req, res, next)=>{
    // res.status(404).json({
    //     status: "fail",
    //     message: `cant find ${req.originalUrl} on this server`
    // })

    // const err = new Error(`Cant find ${req.originalUrl} on this server`);
    // err.status='fail';
    // err.statusCode = 404;
    next(new AppError(`Cant find ${req.originalUrl} on this server`, 404));
});


app.use(erroController);



module.exports = app;