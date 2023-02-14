/* eslint-disable prettier/prettier */
// const { response } = require('express');
// const json = require('express');
const AsyncHandler = require('express-async-handler');
const adminHelper = require('../helpers/adminHelpers');
const commonHelpers=require('../helpers/commonHelpers');

const addProduct = AsyncHandler(async (req, res) => {
  const data = req.body;
  // remove unwated feild from object
console.log(data);
adminHelper
    .addProduct(data)
    .then(() => {
        res.json({ status:true });
    })
    .catch((err) => {
      console.log(err);
       res.json({ status:false });
    });
});

const viewAllProduct = AsyncHandler(async (req, res) => {
    console.log("here");
    commonHelpers
      .viewAllProduct()
      .then((response) => {
        if (response) {
          console.log(response);
          res.json({ status:true, productDetails: response });
        } else {
          res.json({ status:false,error:'product not found' });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });


// exports
module.exports = {
  addProduct,
  viewAllProduct
 
  
};