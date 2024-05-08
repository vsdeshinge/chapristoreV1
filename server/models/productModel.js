const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    
       id:{
        type:Number,
        required:[true, 'A product must have a id']
       },

        name:{
            type:String,
            required:[true, 'A product must have a name']
        },
        gender:{
            type:String

        },
        price:{
            type:Number,
            required:[true, 'A product must have a price']
        },
        
        category:{
            type:String
        },
        sizes:[String],
        color:[String],
        fit:{
            type:String
        },
        sleeve:{
            type: String
        },
        ratings:{
            type: Number
        },
        design:{
            type: String
        },
        fabric:{
            type: String
        },
        neck:{
            type: String

        },

      
      
    
      
        description:{
            type: String,
            trim: true,
            

        },
        img:[String],
        createdAt: {
            type: Date,
            default: Date.now(),
            // this property sets the data in abstraction user cannot see this like it used in hiding passwords also
    
            select: false
        },
        
        uploadedDate:[Date]

}
    
)

    productSchema.pre(/^find/,function(next){
        this.find({secreateTour: {$ne: true}});
        this.start = Date.now();
        next();
    });

    productSchema.post(/^find/,function(docs, next){
        // console.log(`Query took ${Date.now() - this.start} milliseconds!`);
        // console.log(docs);
        next()
    });

    //AGREGATION MIDDLEWARE

    productSchema.pre('aggregate', function(next){
        this.pipeline().unshift({$match:{secreateTour: {$ne: true}}});
        //^^ we are hiding a screate tour 

        // unshift for add field to array in first and shift is last to array it is method in array of javascript
        console.log(this.pipeline());
        next();
    });



const Product = mongoose.model('products',productSchema);

module.exports = Product