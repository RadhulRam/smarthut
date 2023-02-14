const bcrypt = require("bcrypt");
// const { ObjectId, Db } = require('mongodb');
// const { response, json } = require('express');
const collection = require("../config/collection");
const db = require("../config/connection");

module.exports = {
  addProduct: (data) =>
    new Promise((resolve, reject) => {
      console.log(data);
      db.get()
        .collection(collection.PRODUCT_COLLECTION)
        .insertOne(data)
        .then(() => resolve())
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    }),
};
