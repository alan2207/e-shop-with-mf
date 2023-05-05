import { useEffect, useState } from "react";

export const Counter = ({
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
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    if (count !== initialValue) {
      onChange?.(count);
    }
  }, [count, initialValue, onChange]);

  return (
    <span className="gap-8 py-4 border border-black border-1">
      <button
        className="p-4"
        onClick={() => {
          if (count > min) {
            setCount((c) => c - 1);
          }
        }}
      >
        -
      </button>
      <input
        onChange={(e) => {
          const value = parseInt(e.target.value);

          if (value >= min && value <= max) {
            setCount(value);
          }
        }}
        value={count}
        className="w-12 text-center"
      />
      <button
        className="p-4"
        onClick={() => {
          if (count < max) {
            setCount((c) => c + 1);
          }
        }}
      >
        +
      </button>
    </span>
  );
};
