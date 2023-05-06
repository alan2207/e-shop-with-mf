/** @type {import('next').NextConfig} */

const NextFederationPlugin = require("@module-federation/nextjs-mf");
const { FederatedTypesPlugin } = require("@module-federation/typescript");

const getFederationConfig = (isServer) => ({
  name: "cart",
  remotes: {
    main: `main@http://localhost:3000/_next/static/${
      isServer ? "ssr" : "chunks"
    }/remoteEntry.js`,
    products: `products@http://localhost:3001/_next/static/${
      isServer ? "ssr" : "chunks"
    }/remoteEntry.js`,
    cart: `cart@http://localhost:3002/_next/static/${
      isServer ? "ssr" : "chunks"
    }/remoteEntry.js`,
    checkout: `checkout@http://localhost:3003/_next/static/${
      isServer ? "ssr" : "chunks"
    }/remoteEntry.js`,
  },
  filename: "static/chunks/remoteEntry.js",
  exposes: {
    "./add-to-cart": "./src/components/add-to-cart.tsx",
    "./cart-page": "./src/components/cart-page.tsx",
    "./cart-store": "./src/cart-store.ts",
    "./cart-summary": "./src/components/cart-summary.tsx",
  },
  shared: {},
});

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["shared"],
  webpack(config, options) {
    const { isServer } = options;

    const mfConf = getFederationConfig(isServer);

    config.plugins.push(new NextFederationPlugin(mfConf));

    // config.plugins.push(new FederatedTypesPlugin({ federationConfig: mfConf }));
    return config;
  },
};

module.exports = nextConfig;
