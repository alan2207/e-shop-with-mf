import { apiClient } from "shared";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: ProductRating;
};

export type ProductRating = {
  rate: number;
  count: number;
};

export const getProducts = (): Promise<Product[]> => {
  return apiClient.get("products").json();
};

export const getProduct = (id: number | string): Promise<Product> => {
  return apiClient.get(`products/${id}`).json();
};
