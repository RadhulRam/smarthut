const jwt = require("jsonwebtoken");
const AsyncHandler = require("express-async-handler");
const clientHelpers = require("../helpers/clientHelpers");
const commonHelpers = require("../helpers/commonHelpers");

const clientlogin = async (req, res) => {
  clientHelpers
    .clientLogin(req.body)
    .then((response) => {
      const token = jwt.sign(
        {
          userId: response.user._id,
          name: response.user.fname,
          email: response.user.email,
        },
        "smartHutRathul@001234@smartHut"
      );
      return res.json({ status: true, user: token });
    })
    .catch((err) => res.json({ status: false, user: null, Message: err }));
};
const addToCart = (req, res) =>{
  clientHelpers
    .addTocart(req.params.id, req.user._id)
    .then(() => res.json({ status: true, message: "Add to cart sucessfully" }))
    .catch((err) => {
      console.log(err);
      res.json({ status: false, message: err });
    });}

const getCartDetails = (req, res) =>
  clientHelpers
    .getCartDetails(req.user._id)
    .then((product) => res.json({ status: true, cartProduct: product }))
    .catch((err) => res.json({ status: false, message: err }));

const removeProduct = (req, res) =>
  clientHelpers
    .removeProduct(req.body, req.params.pId)
    .then(() => res.json({ status: true, message: "Sucessfully Removed" }))
    .catch((err) => res.json({ status: false, message: err }));

// exports
module.exports = {
  clientlogin,
  addToCart,
  getCartDetails,
  removeProduct,
};
