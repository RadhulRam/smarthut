const bcrypt = require("bcrypt");
const { ObjectId, Db } = require("mongodb");
// const { response, json } = require('express');
const collection = require("../config/collection");
const db = require("../config/connection");

module.exports = {
  viewAllProduct: async () =>
    new Promise(async (resolve, reject) => {
      try {
        const details = await db
          .get()
          .collection(collection.PRODUCT_COLLECTION)
          .find()
          .toArray();
        resolve(details);
      } catch (error) {
        reject();
      }
    }),
  viewproductById: (id) =>
    new Promise((resolve, reject) =>
      db
        .get()
        .collection(collection.PRODUCT_COLLECTION)
        .findOne({ _id: ObjectId(id) })
        .then((details) => {
          console.log(details);
          resolve(details);
        })
        .catch((error) => reject(error))
    ),
  findClientById: (id) =>
    new Promise((resolve, reject) => {
      db.get()
        .collection(collection.CLIENT_COLLECTION)
        .findOne({ _id: ObjectId(id) })
        .then((user) => resolve(user))
        .catch((err) => reject(err));
    }),

  // sujith
  // addToCart: (productId) =>{
  //   new Promise((resolve, reject) => {
  //     db
  //      .get()
  //      .collection(collection.PRODUCT_COLLECTION)

  //   })
  // }
};
