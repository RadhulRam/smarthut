// const { response } = require('express');
const express = require("express");
const adminControllers = require("../controllers/adminControllers");

const router = express.Router();

router.post("/addProduct", adminControllers.addProduct);
router.get("/viewproduct", adminControllers.viewAllProduct);

module.exports = router;
