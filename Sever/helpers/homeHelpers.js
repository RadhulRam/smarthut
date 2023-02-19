const bcrypt = require("bcrypt");
// const { ObjectId, Db } = require('mongodb');
// const { response, json } = require('express');
const collection = require("../config/collection");
const db = require("../config/connection");

module.exports = {
  doClientSignup: async (data) =>
    new Promise((resolve, reject) => {
      db.get()
        .collection(collection.CLIENT_COLLECTION)
        .findOne({ phonenumber: data.phonenumber })
        .then(async (userdetails) => {
          if (userdetails === null) {
            data.password = await bcrypt.hash(data.password, 10);
            db.get()
              .collection(collection.CLIENT_COLLECTION)
              .insertOne(data)
              .then(() => {
                resolve({ phoneFound: false });
              })
              .catch((error) => {
                reject(error);
              });
          } else {
            resolve({ phoneFound: true });
          }
        })
        .catch((error) => reject(error));
    }),

  viewproduct: async (data) =>
    new Promise(async (resolve, reject) => {
      try {
        const details = await db
          .get()
          .collection(collection.PRODUCT_COLLECTION)
          .find({ type: data })
          .toArray();
        resolve(details);
      } catch (error) {
        reject();
      }
    }),
};
