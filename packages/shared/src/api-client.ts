import ky from "ky";

export const apiClient = ky.create({
  prefixUrl: "https://fakestoreapi.com",
  headers: {
    "content-type": "application/json",
  },
});
