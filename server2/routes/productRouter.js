const express = require('express');
const tourController = require('./../controllers/productController');


const Product = require('./../models/productModel.js');


const router = express.Router();


const getAllProducts =async (req, res) => {
    try {
  
      const features = new APIFeatures(Product.find(), req.query)
              .filter()
              .sort()
              .limitFields()
              .paginate();
  
          const products = await features.query;
  
      res.status(200).json({
        status: 'success',
        requestedAt: req.requestTime,
        data: products
      });
    } catch (err) {
      console.error('Error fetching data:', err);
      res.status(500).json({ status: 'error', message: 'Error retrieving data' });
    }
  };


router.route('/').get(getAllProducts)

    // .post(tourController.createTour);



// module.exports = router;

module.exports = router;