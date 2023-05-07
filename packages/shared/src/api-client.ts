import ky from "ky";

export const apiClient = ky.create({
  prefixUrl: "http://localhost:8080",
  headers: {
    "content-type": "application/json",
  },
});

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

export const getProducts = async (): Promise<Product[]> => {
  return await apiClient.get("products").json();
};

export const getProduct = async (id: number): Promise<Product> => {
  return await apiClient.get(`products/${id}`).json();
};

export type CartItem = {
  product: Product;
  quantity: number;
  total: number;
};

export type Cart = {
  items: CartItem[];
  total: number;
};

export const getCart = async (): Promise<Cart> => {
  return await apiClient.get("cart").json();
};

export type UpdateCartData = {
  productId: number;
  quantity: number;
};

export const updateCart = async (
  body: UpdateCartData
): Promise<{ success: boolean }> => {
  return await apiClient
    .post("cart", {
      body: JSON.stringify(body),
    })
    .json();
};

export type CheckoutContactInfo = {
  email: string;
  card_number: string;
  expiration_date: string;
  cvc: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
};

export const processCheckout = (contcatInfo: CheckoutContactInfo) => {
  return apiClient.post("checkout", {
    body: JSON.stringify(contcatInfo),
  });
};
