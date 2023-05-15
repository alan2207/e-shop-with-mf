const NextFederationPlugin = require("@module-federation/nextjs-mf");
const { FederatedTypesPlugin } = require("@module-federation/typescript");

const getFederationConfig = (isServer) => ({
  name: "cart",
  remotes: {},
  filename: "static/chunks/remoteEntry.js",
  exposes: {
    "./add-to-cart": "./src/components/add-to-cart.tsx",
    "./cart-page": "./src/components/cart-page.tsx",
    "./cart-store": "./src/cart-store.ts",
    "./cart-summary": "./src/components/cart-summary.tsx",
  },
  shared: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["shared"],
  experimental: {
    appDir: false,
  },
  webpack(config, options) {
    const { isServer } = options;

    const mfConf = getFederationConfig(isServer);

    config.plugins.push(new NextFederationPlugin(mfConf));

    config.plugins.push(new FederatedTypesPlugin({ federationConfig: mfConf }));
    return config;
  },
};

module.exports = nextConfig;
