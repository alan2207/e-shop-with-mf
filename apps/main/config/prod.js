module.exports = {
  getRemotes: (isServer) => ({
    products: `products@http://localhost:4001/_next/static/${
      isServer ? "ssr" : "chunks"
    }/remoteEntry.js`,
    cart: `cart@http://localhost:4002/_next/static/${
      isServer ? "ssr" : "chunks"
    }/remoteEntry.js`,
    checkout: `checkout@http://localhost:4003/_next/static/${
      isServer ? "ssr" : "chunks"
    }/remoteEntry.js`,
    home: `home@http://localhost:4004/remoteEntry.js`,
  }),
};
