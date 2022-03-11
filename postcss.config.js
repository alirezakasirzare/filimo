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
      content: ["./src/**/*.html"],
    }),
    rtlcss,
  ],
};
