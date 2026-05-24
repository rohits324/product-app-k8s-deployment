import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "/api/products";

export const getProducts = () => axios.get(API_URL);

export const createProduct = (product) =>
  axios.post(API_URL, product, {
    headers: {
      "Content-Type": "application/json",
    },
  });

export const deleteProduct = (id) =>
  axios.delete(`${API_URL}/${id}`);

export const updateProduct = (id, product) =>
  axios.put(`${API_URL}/${id}`, product);
