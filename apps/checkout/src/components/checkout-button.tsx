import { useRouter } from "next/router";

export const CheckoutButton = () => {
  const router = useRouter();
  return (
    <button
      className="w-full px-4 py-3 text-base font-medium text-white bg-black border rounded-md shadow-sm focus:ring-offset-gray-50"
      onClick={() => {
        router.push("/checkout");
      }}
    >
      Go to Checkout
    </button>
  );
};
