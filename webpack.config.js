const path = require("path")
// const outputPath = path.resolve(__dirname, "dist")
module.exports = {
  // コマンドで適用するなら: webpack --watch
  // watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
  mode: "development",
  entry: "./src/main.js",
  output: {
    path: path.join(__dirname, "public"),
    // path: __dirname + "/dist",
    filename: "main.js",
  },
  devServer: {
    open: true,
    // Hot module replacement != リロードではない.. モジュール単位で更新
    hot: true,
    contentBase: path.resolve(__dirname, "public"),
    // --- default ---
    // inline: true,
  },
}
