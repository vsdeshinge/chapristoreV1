
exports.getlogin = (req, res, next) => {
    console.log(req.body);
    next();
 };


 exports.getSignUp = (req, res, next)=>{
    console.log(req.body);
    next();
 }