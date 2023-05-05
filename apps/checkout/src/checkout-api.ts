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

export type CheckoutCart = Array<{ id: number; quantity: number }>;

export type ProcessCheckoutData = {
  contact_info: CheckoutContactInfo;
  cart_items: CheckoutCart;
};

export const processCheckout = (
  data: ProcessCheckoutData
): Promise<boolean> => {
  return new Promise((res) => {
    setTimeout(() => {
      res(true);
    }, 500);
  });
};
