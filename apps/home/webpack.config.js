const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { VueLoaderPlugin } = require("vue-loader");
const { FederatedTypesPlugin } = require("@module-federation/typescript");
const { getAppConfig } = require("./config");

module.exports = (env, argv) => {
  process.env.NODE_ENV = env.environment;

  const appConfig = getAppConfig();

  const mfConf = {
    name: "home",
    filename: "remoteEntry.js",
    remotes: {
      ...appConfig.getRemotes(),
    },
    exposes: {
      "./Home": "./src/components/Home.vue",
      "./inject-home": "./src/components/inject-home.ts",
    },
    shared: require("./package.json").dependencies,
  };

  return {
    output: {
      publicPath: appConfig.publicPath,
    },

    resolve: {
      extensions: [".tsx", ".ts", ".vue", ".jsx", ".js", ".json"],
    },

    devServer: {
      port: 3004,
      historyApiFallback: true,
    },

    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: "vue-loader",
        },
        {
          test: /\.tsx?$/,
          use: [
            "babel-loader",
            {
              loader: "ts-loader",
              options: {
                transpileOnly: true,
                appendTsSuffixTo: ["\\.vue$"],
                happyPackMode: true,
              },
            },
          ],
        },
        {
          test: /\.(css|s[ac]ss)$/i,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
      ],
    },

    plugins: [
      new VueLoaderPlugin(),
      new ModuleFederationPlugin(mfConf),
      // new FederatedTypesPlugin({ federationConfig: mfConf }),
      new HtmlWebPackPlugin({
        template: "./src/index.html",
      }),
    ],
  };
};
