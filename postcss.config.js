// autoprefixer plugin
const autoprefixer = require("autoprefixer");
// purgecss plugin
const purgecss = require("@fullhuman/postcss-purgecss");
// rtlcss plugin
const rtlcss = require("postcss-rtlcss");

module.exports = {
  // add plugins to postcss
  plugins: [
    autoprefixer,
    purgecss({
      content: [
        "./src/**/*.html",
        "./node_modules/bootstrap/js/dist/dropdown.js",
        "./node_modules/bootstrap/js/dist/collapse.js",
        "./node_modules/bootstrap/js/dist/modal.js",
        "./node_modules/bootstrap/js/dist/carousel.js",
        "./src/scripts/history-search.js",
      ],
    }),
    rtlcss,
  ],
};
