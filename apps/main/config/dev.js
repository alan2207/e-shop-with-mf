module.exports = {
  getRemotes: (isServer) => ({
    products: `products@http://localhost:3001/_next/static/${
      isServer ? "ssr" : "chunks"
    }/remoteEntry.js`,
    cart: `cart@http://localhost:3002/_next/static/${
      isServer ? "ssr" : "chunks"
    }/remoteEntry.js`,
    checkout: `checkout@http://localhost:3003/_next/static/${
      isServer ? "ssr" : "chunks"
    }/remoteEntry.js`,
    home: `home@http://localhost:3004/remoteEntry.js`,
  }),
};
