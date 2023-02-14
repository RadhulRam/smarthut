import {  axiosHomeInstance } from "../axios";

export const clientRegister = async (value) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const { data } = await axiosHomeInstance.post(
    "/clientRegister",
    value,
    config
  );
  if (data) {
    return data;
  }
};

export const findProductByCategory = async (value) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const { data } = await axiosHomeInstance.get(
    `/getProductBY/${value}`,
    config
  );
  if (data) {
    return data;
  }
};

export const findProductById = async (id) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const { data } = await axiosHomeInstance.get(
    `/getProductBYId/${id}`,
    config
  );
  if (data) {
    return data;
  }
};

export const clientLogin = async (value) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const { data } = await axiosHomeInstance.post(
    "/client/login",
    value,
    config
  );
  if (data) {
    return data;
  }
};


