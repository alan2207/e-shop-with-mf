import { Product } from "shared";
import { Counter } from "shared";
import { useCallback, useState } from "react";
import { useCart } from "../cart-store";

export const AddToCart = ({ product }: { product: Product }) => {
  const [quantity, setQuantity] = useState(1);

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
        }}
        className="w-full p-2 text-white bg-black"
      >
        Add to cart
      </button>
    </div>
  );
};
