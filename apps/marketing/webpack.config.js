const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { VueLoaderPlugin } = require("vue-loader");
const { FederatedTypesPlugin } = require("@module-federation/typescript");

const mfConf = {
  name: "marketing",
  filename: "remoteEntry.js",
  remotes: {},
  exposes: {
    "./Promo": "./src/components/Promo.vue",
    "./inject-promo": "./src/components/inject-promo.ts",
  },
  shared: require("./package.json").dependencies,
};

module.exports = (_, argv) => ({
  output: {
    publicPath: "http://localhost:3004/",
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
});
