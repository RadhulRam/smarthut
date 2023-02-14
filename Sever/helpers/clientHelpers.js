const bcrypt = require("bcrypt");
const { ObjectId } = require("mongodb");
// const { response, json } = require('express');
const collection = require("../config/collection");
const db = require("../config/connection");

module.exports = {
  clientLogin: (userData) =>
    new Promise((resolve, reject) => {
      const response = {};
      db.get()
        .collection(collection.CLIENT_COLLECTION)
        .findOne({ phonenumber: userData.phone })
        .then((user) => {
          console.log(user);
          if (user) {
            console.log(user);
            bcrypt
              .compare(userData.password, user.password)
              .then((status) => {
                if (status) {
                  response.user = user;
                  response.status = true;
                  resolve(response);
                } else {
                  let errMessage = "password Mismatch";
                  reject(errMessage);
                }
              })
              .catch((err) => reject(err));
          } else {
            let errMessage = "invalid userId";
            reject(errMessage);
          }
        })
        .catch((err) => reject(err));
    }),

  addTocart: (proId, userId) => {
    let proObj = {
      iteam: ObjectId(proId),
      quantity: 1,
    };
    return new Promise(async (resolve, reject) => {
      let userCart = await db
        .get()
        .collection(collection.cart_COLLECTION)
        .findOne({ user: ObjectId(userId) });

      if (userCart) {
        let proExt = userCart.productId.findIndex(
          (productId) => productId.iteam == proId
        );
        if (proExt != -1) {
          db.get()
            .collection(collection.cart_COLLECTION)
            .updateOne(
              { user: ObjectId(userId), "productId.iteam": ObjectId(proId) },
              {
                $inc: { "productId.$.quantity": 1 },
              }
            )
            .then(() => {
              resolve();
            });
        } else {
          //pushing to cart
          db.get()
            .collection(collection.cart_COLLECTION)
            .updateOne(
              { user: ObjectId(userId) },
              {
                $push: { productId: proObj },
              }
            )
            .then((responce) => {
              resolve();
            });
        }
      } else {
        let cartObj = {
          user: ObjectId(userId),
          productId: [proObj],
        };

        db.get()
          .collection(collection.cart_COLLECTION)
          .insertOne(cartObj)
          .then((responce) => {
            resolve();
          });
      }
    });
  },

  getCartDetails: (userId) => {
    return new Promise(async (resolve, reject) => {
      let cartIteam = await db
        .get()
        .collection(collection.cart_COLLECTION)
        .aggregate([
          {
            $match: { user: ObjectId(userId) },
          },

          {
            $unwind: "$productId",
          },
          {
            $project: {
              iteam: "$productId.iteam",
              quantity: "$productId.quantity",
            },
          },
          {
            //to join anothtre table fields to current table
            $lookup: {
              from: collection.PRODUCT_COLLECTION,
              localField: "iteam",
              foreignField: "_id",
              as: "product",
            },
          },
          {
            $project: {
              iteam: 1,
              quantity: 1,
              product: { $arrayElemAt: ["$product", 0] },
              //arrayElemAt userd to convert array to object
            },
          },
        ])
        .toArray();

      resolve(cartIteam);
    });
  },

  //to get total

  getTotal: (userId) => {
    return new Promise(async (resolve, reject) => {
      try {
        let total = await db
          .get()
          .collection(collection.cart_COLLECTION)
          .aggregate([
            {
              $match: { user: ObjectId(userId) },
            },

            {
              $unwind: "$productId",
            },
            {
              $project: {
                iteam: "$productId.iteam",
                quantity: "$productId.quantity",
              },
            },
            {
              //to join anothtre table fields to current table
              $lookup: {
                from: collection.product_COLLECTION,
                localField: "iteam",
                foreignField: "_id",
                as: "product",
              },
            },
            {
              $project: {
                iteam: 1,
                quantity: 1,
                product: { $arrayElemAt: ["$product", 0] },
                //arrayElemAt userd to convert array to object
              },
            },
            {
              $group: {
                _id: null,
                total: {
                  $sum: { $multiply: ["$quantity", "$product.retailerPrice"] },
                },
                //arrayElemAt userd to convert array to object
              },
            },
          ])
          .toArray();
        resolve(total[0].total);
      } catch {
        let total = 0;
        resolve(total);
      }
    });
  },
  removeProduct: (details, pId) =>
    new Promise((resolve, reject) => {
      db.get()
        .collection(collection.cart_COLLECTION)
        .updateOne(
          { _id: ObjectId(details.cartId) },
          {
            $pull: { productId: { iteam: ObjectId(pId) } },
          }
        )
        .then(() => resolve())
        .catch((err) => reject(err));
    }),
};
