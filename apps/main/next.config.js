const NextFederationPlugin = require("@module-federation/nextjs-mf");
const { FederatedTypesPlugin } = require("@module-federation/typescript");
const { getAppConfig } = require("./config");

const appConfig = getAppConfig();

const getFederationConfig = (isServer) => ({
  name: "main",
  remotes: {
    ...appConfig.getRemotes(isServer),
  },
  filename: "static/chunks/remoteEntry.js",
  exposes: {},
  shared: {},
});

/** @type {import('next').NextConfig} */
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
