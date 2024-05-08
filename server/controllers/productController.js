const Product = require('./../models/productModel')
const APIFeatures = require('./../utils/apiFeatures')
const catchAsync = require('./../utils/catchAsync')


exports.getAllProducts =async (req, res) =>{
    try{
         

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

    }catch(err){
        res.status(404).json({
            status:'fail'
        })
        //console.log(err);
    }
    
};

exports.getProduct = async(req, res) =>{
    
    try{
        
        const product = await Product.find({id: `${req.params.id}`});
         //Tour.findOne({_id:req.param.id}) both are similar way
    
  
    res.status(200).json({
        status: 'success',
        data:{
            product
        }
        
    });

    }catch(err){
        res.send(404).json({
            status:'fail',
            message:'invalid id'
        })
    }

    

};





exports.createProduct= catchAsync(async(req, res, next)=>{
    
        const newProduct= await Product.create(req.body);
        res.status(201).json({
            status: 'success',
            data:{
                product: newProduct
            }
        });
    

});



exports.updateProduct= async(req,res )=>{

    try{

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
    }catch(err){
        res.send(404).json({
            status:'fail',
            message:err
        })
    }

};

exports.deleteProduct = async (req, res) => {
    try {
        console.log(req.params.id);
        await Product.findByIdAndDelete(req.params.id);
        res.Status(204).json({
            status: 'success',
            data: null
        });
    } catch (err) {
        res.sendStatus(404).json({
            status: 'fail',
            message: err
        });
    }
};
