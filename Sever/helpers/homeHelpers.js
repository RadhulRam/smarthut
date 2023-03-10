const bcrypt = require("bcrypt");
// const { ObjectId, Db } = require('mongodb');
// const { response, json } = require('express');
const collection = require("../config/collection");
const db = require("../config/connection");

module.exports = {
  doClientSignup: async (data) =>
    new Promise(async (resolve, reject) => {
      const extphone = await db
        .get()
        .collection(collection.CLIENT_COLLECTION)
        .findOne({ phone: data.phone });

      if (extphone == null) {
        return new Promise(async (resolve, reject) => {
          data.password = await bcrypt.hash(data.password, 10);
          db.get()
            .collection(collection.CLIENT_COLLECTION)
            .insertOne(data)
            .then((data) => {
              resolve(data);
            })
            .catch((error) => {
              reject(error);
            });
        })
          .then((data) => {
            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      } else {
        resolve({ phoneFound: true });
      }
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
