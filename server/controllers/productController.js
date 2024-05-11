const Product = require('./../models/productModel')
const APIFeatures = require('./../utils/apiFeatures')
const catchAsync = require('./../utils/catchAsync')


exports.getAllProducts = catchAsync(async (req, res, next) =>{
    
         

         //EXECUTE QUERY WITH CLASS
         const features = new APIFeatures(Product.find(), req.query)
            .filter()
            .sort()
            .limitFields()
            .paginate();

        const products = await features.query;
        
        
        res.status(200).json({
        status: 'success',
        requestedAt: req.requestTime,
        data:{
            products
        }
    })

    
    
});

exports.getProduct = catchAsync(async(req, res, next) =>{
    
    
        const id = req.params.id*1;
        
    const product = await Product.find({id: id});
         //Tour.findOne({_id:req.param.id}) both are similar way

        if (product.length === 0) {
            throw new Error('Product not found');
    }
  
    res.status(200).json({
        status: 'success',
        data:{
            product
        }
        
    })

    // }catch(err){
    //     res.status(404).json({
    //         status:'fail',
    //         message:"invalid id"
    //     })
    // }

    

});





exports.createProduct= catchAsync(async(req, res, next)=>{
    
        const newProduct= await Product.create(req.body);
        res.status(201).json({
            status: 'success',
            data:{
                product: newProduct
            }
        });
    

});



exports.updateProduct= catchAsync(async(req,res, next )=>{

    

        const product = await Product.findByIdAndUpdate(req.params.id,req.body,{
            new : true,
            runValidators: true
        })
        res.status(200).json({
            status: 'success',
            data:{
                product:product
            }
        
        });
    

});

exports.deleteProduct = catchAsync(async (req, res, next) => {
    
        console.log(req.params.id);
        await Product.findByIdAndDelete(req.params.id);
        res.Status(204).json({
            status: 'success',
            data: null
        });
    
});
