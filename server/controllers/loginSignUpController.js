
const User = require('./../models/signUpModel');
const validator = require('validator');
const catchAsynch = require('./../utils/catchAsync')



exports.getlogin = catchAsynch(
   
   async(req, res, next) => {
       console.log(req.body);
       next()
       const usernameOrEmail = req.body.name;
       
   
       const password = req.body.password;
       let data = "invalid username/password "
   
       
   
   
       await User
         .find({ $or: [
            { username: usernameOrEmail },
            { email: usernameOrEmail }
          ] }, { username: 1,email:1, password: 1, _id: 0 })
         .then(docs => {
           console.log('Documents retrieved:', docs);
           if (docs.length > 0) {
             const singleObject = docs[0];
             if (password === singleObject.password) {
               data ="Authentication successful"
              
               
             }
           }
   
           console.log(data);
           
         })
      }
);
      


        
        
        
        
        
      





 exports.getSignUp = catchAsynch(async(req, res, next)=>{

   const newUser= await User.create(req.body);
        res.status(201).json({
            status: 'success',
            data:{
                product: newUser
            }
        });
    //next();
 });



 exports.men = async(req, res, next)=>{
   console.log("hello from men");
   next();
 }


 exports.men2 = async(req, res, next)=>{
   console.log("hello from men2");
   next();
 }