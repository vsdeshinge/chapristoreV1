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


const Product = require('./models/productModel');
const APIFeatures = require('./utils/apiFeatures');

// app.get('/', async (req, res) => {
//   try {

//     const features = new APIFeatures(Product.find(), req.query)
//             .filter()
//             .sort()
//             .limitFields()
//             .paginate();

//         const products = await features.query;

//     res.status(200).json({
//       status: 'success',
//       requestedAt: req.requestTime,
//       data: products
//     });
//   } catch (err) {
//     console.error('Error fetching data:', err);
//     res.status(500).json({ status: 'error', message: 'Error retrieving data' });
//   }
// });


// app.post('/',(req, res, data)=>{

// })


app.use('/',productRouter)






// app.all('*',(req,res, next)=>{
 
//     next(AppError.AppError());
// });


    

app.use(erroController);


module.exports = app;