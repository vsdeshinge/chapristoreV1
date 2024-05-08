const mongoose = require('mongoose');
const validator = require('validator');


const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            require:[true, "a user must have name"],

        },
        email:{
            type:String,
            require:[true, "a user must have email"],
            unique: true,
            validate: [validator.isEmail]

        },
        photo: String,
        password:{
            type: String,
            require:[true, "a user must have password"],
            minlength: 8,
            
            
        },
        passwordConfirm:{
            type: String,
            require:[true, "a user must have password"],
            minlength: 8
            
        }
    }
);


const User = mongoose.model("User", userSchema);
module.exports = User;