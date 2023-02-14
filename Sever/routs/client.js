// const { response } = require('express');
const express = require("express");
const clientControllers = require("../controllers/clientControllers");
const { clientProtect } = require("../middleware/tokenAuth");

const router = express.Router();

router.post("/login", clientControllers.clientlogin);
router.post(
  "/cart/add-product/:id",
  clientProtect,
  clientControllers.addToCart
);
router.get(
  "/cart/get-all-product",
  clientProtect,
  clientControllers.getCartDetails
);
router.patch("/cart/product-Change-Qunty/:pId", clientProtect, (req, res) => {
  res.json({ status: true });
});
router.delete(
  "/cart/delete-product/:pId",
  clientProtect,
  clientControllers.removeProduct
);

module.exports = router;
