const { match } = require('assert');
const fs = require('fs');
const { join } = require('path');
const product1= require('./../models/productModel.js');
const APIFeatures = require('./../utils/apiFeatures');


exports.getAllProducts =async (req, res) => {
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