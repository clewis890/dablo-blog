const path = require("path");

module.exports = {
  // basePath: '/blog',
  target: "serverless",
  webpack(config) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  }
};
