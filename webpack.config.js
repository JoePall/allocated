const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  mode: "development",
  entry: "./public/index.js",
  output: {
    path: __dirname + "/public/dist",
    filename: "bundle.js"
  },
  plugins: [
    new WebpackPwaManifest({
      name: "Allocated",
      short_name: "Allocated - A budget app",
      description: "An application for keeping track of finances",
      background_color: "#ffccaa",
      theme_color: "#ffffff",
      "theme-color": "#ffffff",
      start_url: "/",
      icons: [
        {
          src: path.resolve("assets/icons/icon-192x192.png"),
          sizes: [192, 512],
          destination: path.join("assets", "icons")
        }
      ]
    })
  ]
};
module.exports = config;
