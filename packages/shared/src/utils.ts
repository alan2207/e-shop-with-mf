import Cookies from "js-cookie";

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};

export const uid = () => {
  return (performance.now().toString(36) + Math.random().toString(36)).replace(
    /\./g,
    ""
  );
};

export const setAnonymousIdUser = () => {
  const anonymousIdCookie = Cookies.get("anonymousId");
  if (!anonymousIdCookie) {
    const anonymousId = uid();
    Cookies.set("anonymousId", anonymousId, { expires: 365 });
    return anonymousId;
  }
  return anonymousIdCookie;
};
