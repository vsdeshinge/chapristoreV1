const express = require('express');
const fs = require('fs');
const morgan = require('morgan');

const adminRouter = require('./routes/adminRoutes');
const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRouter');
const AppError = require('./utils/appError');
const erroController = require('./controllers/errorController');



const app = express();


if(process.env.NODE_ENV == 'DEVELOPMENT'){
    app.use(morgan('dev'));
}


app.use(express.json());
// to access the static objects in the file by using express.static
app.use(express.static(`${__dirname}/public`));
//middle ware


const product = require('./models/productModel');
const APIFeatures = require('./utils/apiFeatures');


app.get('/', async (req, res) => {
  try {

    // const features = new APIFeatures(Product.find(), req.query)
    //         .filter()
    //         .sort()
    //         .limitFields()
    //         .paginate();

        const products = await product.find();

    res.status(200).json({
      status: 'success',
      requestedAt: req.requestTime,
      data: products
    });
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).json({ status: 'error', message: 'Error retrieving data' });
  }
});

app.get('/:id',async (req,res)=>{
    try{
        const product = await product.findById(req.params.id)
        res.status(200).json({
            status: 'success',
            data:{
                product
            }
            
        });
    
        }catch(err){
            res.send(404).json({
                status:'fail',
                message:'invalid id'
            })
        }
    });    












// app.all('*',(req,res, next)=>{
 
//     next(AppError.AppError());
// });


    

app.use(erroController);


module.exports = app;