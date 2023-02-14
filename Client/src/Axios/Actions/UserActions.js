import { axiosClientInstance } from "../axios";

export const addToCart = async (id, token) => {
  try {
   const value = {};
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    };
    const { data } = await axiosClientInstance.post(
      `/cart/add-product/${id}`,
      value,
      config
    );
    if (data) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};




export const allCartProducts = async ( token) => {
    try {
      const config = {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      };
      const { data } = await axiosClientInstance.get(
        '/cart/get-all-product',
        config
      );
      console.log(data);
      if (data) {
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  export const cartProductDelete = async (cartId,productId,token) => {
    try {
      // let value={cartId:cartId}
      const config = {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      };
      const { data } = await axiosClientInstance.delete(
        `/cart/delete-product/${productId}`,
        {cartId:cartId},
        config
      );
      console.log(data);
      if (data) {
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };