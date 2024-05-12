const AppError = require("../utils/appError");

const handleCastErrorDB = err=>{
    const message = `Invalid ${err.path}: ${err.value}.`;
    return new AppError(message, 400);
}

const hadleDuplicatesDB = err=>{
    const value = err.errmsg.match(/(["'])(?:(?=(\\?))\2.)*?\1/)[0];
    console.log(value)
    const message = `duplicate value ${value}, Please enter another value`
    return new AppError(message, 404)
}

const handleValidationErrorDB =err =>{
    const errors = Object.values(err.errors).map(el =>el.message)
    const message = `invalid input data.${errors.join('.  ')}`;
    return new AppError(message, 400)


}








const sendErrorDev = (err, res)=>{
    res.status(err.statusCode).json({
        status: err.status,
        err:err,
        message: err.message,
        stack: err.stack
    });
    

}
const sendErrorProd=(err, res, next)=>{

    if(err.isOperational){

        res.status(err.statusCode).json({
            status: err.status,
            
            message: err.message,
            
        });

    // programing or other unknown error: dont leak error details
    }else {

        //01)Log error
        console.error('ERROR', err);

        //02)send a generic message
        res.status(500).json({
            status: 'error',
            message: "something went wrong"
        })
    }
    
}




module.exports = (err, req, res, next)=>{
    err.statusCode = err.statusCode || 500;
    // 500 is internal sever error
    err.status = err.status || 'error'
    
    if(process.env.NODE_ENV ==='DEVELOPMENT'){
        console.log(err.name)
        

        sendErrorDev(err, res);

        

    }else if(process.env.NODE_ENV3 ==='PRODUCTION'){
        
        
        if(err.name === 'CastError') err = handleCastErrorDB(err);
        if(err.code === 11000) err=hadleDuplicatesDB(err);

        if(err.name === 'ValidationError') err =handleValidationErrorDB(err);
        

        sendErrorProd(err, res);


    }

    
        
    
    
    
}