module.exports = {
  // コマンドで適用するなら: webpack --watch
  // watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
  mode: "development",
  entry: "./src/main.js",
  output: {
    path: __dirname + "/dist",
    filename: "main.js",
  },
}
