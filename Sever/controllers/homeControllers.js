/* eslint-disable prettier/prettier */
// const { response } = require('express');
// const json = require('express');
const AsyncHandler = require("express-async-handler");
const commonHelpers = require("../helpers/commonHelpers");
const homeHelper = require("../helpers/homeHelpers");

const clientSignup = AsyncHandler(async (req, res) => {
  const data = req.body;
  // remove unwated feild from object
  console.log(data);
  homeHelper
    .doClientSignup(data)
    .then((response) => {
      if (response.phoneFound) {
        res.json({ status: false, error: "Duplicate Phone number" });
      } else {
        res.json({ status: true });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

const getproduct = AsyncHandler(async (req, res) => {
  const { category } = req.params;
  homeHelper
    .viewproduct(category)
    .then((response) => {
      if (response) {
        console.log(response);
        res.json({ status: true, productDetails: response });
      } else {
        res.json({ status: false, error: "product not found..." });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
const getProductById = AsyncHandler(async (req, res) => {
  const { id } = req.params;
  commonHelpers
    .viewproductById(id)
    .then((response) => res.json({ status: true, productDetails: response }))
    .catch((err) =>
      res.json({
        status: false,
        error: "product not found...",
        errMessage: err,
      })
    );
});

// sujith
// const addToCart= AsyncHandler(async (req,res)=>{
//   const {id} = req.params;
//   const userId = res.user.userId
//   commonHelpers
//    .addToCart(id)

// })

// exports
module.exports = {
  clientSignup,
  getproduct,
  getProductById,
};
