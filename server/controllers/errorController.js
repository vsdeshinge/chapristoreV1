module.exports = (err, req, res, next)=>{

    console.error(err.stack);
    err.statuscode = err.statuscode || 500;
    err.status = err.status || 'error';

    res.sendStatus(err.statuscode).json({
        status:'fail',
        message:err.status
    });

};