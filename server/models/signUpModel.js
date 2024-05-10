const mongoose = require('mongoose');
const validator = require('validator');


const signUpschema = mongoose.Schema(
    {
        firstname:{
            type: String,
            required: [true, "name is required"]
        },
        lastname:{
            type: String,
            required: [true, "name is required"]
        },

        username:{
            type: String,
            required:[true, "username is required"]
        },

        mobilenumber:{
            type: Number,
            required: [true, "mobile number required"],
            minlength: 10
            
        },

        email:{
            type:String,
            require:[true, "a user must have email"],
            unique: true,
            validate: [validator.isEmail]


        },
        password:{
            type: String,
            require: [true, "password is required"],
            minlength:8,
            
        },

        passwordConfirm:{
            type: String,
            require:[true, "a user must have password"],
            minlength: 8
            
        },

        address:{
            type: String,
            
            
        }
    }
);


const User = mongoose.model("UserDetails", signUpschema);
module.exports = User;




