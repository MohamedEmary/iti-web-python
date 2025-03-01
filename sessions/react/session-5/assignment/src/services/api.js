import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

export const getCategories = async () => {
  const response = await axios.get(`${BASE_URL}/products/categories`);
  return response.data;
};

export const getProducts = async (categoryId = null) => {
  const url = categoryId
    ? `${BASE_URL}/products/category/${categoryId}`
    : `${BASE_URL}/products`;
  const response = await axios.get(url);
  return response.data;
};

export const getProduct = async (id) => {
  const response = await axios.get(`${BASE_URL}/products/${id}`);
  return response.data;
};
