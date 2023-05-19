module.exports = {
  getRemotes: (isServer) => ({
    cart: `cart@http://localhost:3002/_next/static/${
      isServer ? "ssr" : "chunks"
    }/remoteEntry.js`,
  }),
};
