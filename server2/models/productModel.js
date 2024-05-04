const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    name:{
        type: String,
        required: [true,'A tour must have a name'],// we are specifing array for conditon and error
        unique: true // there should not be any duplicates
    },

    id:{
        type: String,
        required: [true,'a product must have id'],// we are specifing array for conditon and error
        unique: true // there should not be any duplicates
    },

    details:{


        gender:{
            type: String,
            required: [true,'a product must have gender'],// we are specifing array for conditon and error
            
        },
    
        category:{
            type: String,
            required: [true,'a product must have category'],// we are specifing array for conditon and error
            
        },
    
        sizes:[String],
    
        color:{
            type: String,
            required: [true,'a product must have color'],// we are specifing array for conditon and error
            
        },
    
        fit:{
            type: String,
            required: [true,'a product must have fit'],// we are specifing array for conditon and error
            
        },
    
        sleeve:{
            type: String,
            
            
        },
    
        ratings:{
            type: Number,
            default: 4.5
        },
    
        design:{
            type: String,
            required: [true,'a product must have design'],// we are specifing array for conditon and error
            
        },
    
        fabric:{
            type: String,
            required: [true,'a product must have fabric'],// we are specifing array for conditon and error
            
        },
    
        neck:{
            type: String,
            
        },
    
    
        price: {
            type: Number,
            required: [true, 'A tour must have a price'],                  
            // validator
            min:[0, 'price must be positive']
            
        },
        // priceDiscount:{
            
        //     type: Number,
        //     // custome validator
        //     // learn from validator.js
        //     validate:function(val) {
        //         // this only point to current doc on New document 
        //         return  val<this.price;
        //     },
        //     message: `Discount price ({price}) should be below regular price`
        // } ,
        description: {
            type: String,
            trime: true
        },
        img:[String]
    },


    createdAt: {
        type: Date,
        default: Date.now(),
        // this property sets the data in abstraction user cannot see this like it used in hiding passwords also

        select: false
    },

    uploaded_date:{
        type: String,

    }


})



const product = mongoose.model('product',productSchema);
module.exports = product;