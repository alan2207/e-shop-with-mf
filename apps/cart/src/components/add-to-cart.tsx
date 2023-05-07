import { Product } from "shared";
import { Counter } from "shared";
import { useCallback, useState } from "react";
import { useCart } from "cart/cart-store";
import { useNotifications } from "main/notifications";

export const AddToCart = ({ product }: { product: Product }) => {
  const [quantity, setQuantity] = useState(1);
  const { showNotification } = useNotifications();
  const { addCartItem } = useCart();

  const handleQuantityChange = useCallback(
    (value: number) => {
      setQuantity(value);
    },
    [setQuantity]
  );

  return (
    <div>
      <div className="my-8">
        Quantity
        <br />
        <Counter initialValue={quantity} onChange={handleQuantityChange} />
      </div>
      <button
        onClick={() => {
          addCartItem(product, quantity);
          showNotification({
            title: "Cart Updated",
            message: `${product.title} x ${quantity} added to cart`,
            type: "success",
            duration: 5000,
          });
        }}
        className="w-full p-2 text-white bg-black"
      >
        Add to cart
      </button>
    </div>
  );
};
