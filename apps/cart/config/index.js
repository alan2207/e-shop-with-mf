const config = {
  dev: require("./dev"),
  prod: require("./prod"),
};

const getAppConfig = () => {
  if (process.env.NODE_ENV === "production") {
    return config.prod;
  }
  return config.dev;
};

module.exports = {
  getAppConfig,
};
