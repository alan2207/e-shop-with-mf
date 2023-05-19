module.exports = {
  getRemotes: (isServer) => ({
    cart: `cart@http://localhost:4002/_next/static/${
      isServer ? "ssr" : "chunks"
    }/remoteEntry.js`,
  }),
};
