const autoprefixer = require("autoprefixer");
const purgecss = require("@fullhuman/postcss-purgecss");
const rtlcss = require("postcss-rtlcss");

module.exports = {
  plugins: [
    // autoprefixer,
    // purgecss({
    //   content: ["./src/**/*.html"],
    // }),
    rtlcss,
  ],
};
