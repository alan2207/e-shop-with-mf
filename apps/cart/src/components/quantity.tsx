import { useEffect, useState } from "react";

export const Quantity = ({
  initialValue = 1,
  onChange,
  min = 1,
  max = 10000,
}: {
  initialValue?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
}) => {
  const [quantity, setQuantity] = useState(initialValue);

  useEffect(() => {
    if (quantity !== initialValue) {
      onChange?.(quantity);
    }
  }, [quantity, initialValue, onChange]);

  return (
    <span className="gap-8 py-4 border border-black border-1">
      <button
        className="p-4"
        onClick={() => {
          if (quantity > min) {
            setQuantity((c) => c - 1);
          }
        }}
      >
        -
      </button>
      <input
        onChange={(e) => {
          const value = parseInt(e.target.value);

          if (value >= min && value <= max) {
            setQuantity(value);
          }
        }}
        value={quantity}
        className="w-12 text-center"
      />
      <button
        className="p-4"
        onClick={() => {
          if (quantity < max) {
            setQuantity((c) => c + 1);
          }
        }}
      >
        +
      </button>
    </span>
  );
};
