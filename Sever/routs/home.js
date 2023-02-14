// const { response } = require('express');
const express = require("express");
const homeControllers = require("../controllers/homeControllers");

const router = express.Router();

router.post("/clientRegister", homeControllers.clientSignup);
router.get("/getProductBY/:category", homeControllers.getproduct);
router.get("/getProductBYId/:id", homeControllers.getProductById);
// sujith
// router.get("/add-to-cart", homeControllers.addToCart)

module.exports = router;
