const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss')({
  // @see https://github.com/Developmint/nuxt-purgecss/blob/master/lib/module.js#L18-L41
  content: ['./src/**/*.vue', './src/assets/**/*.css'],
  styleExtensions: ['.css'],
  whitelist: ['body', 'html'],
  whitelistPatterns: [
    /.*-(enter|enter-active|enter-to|leave|leave-active|leave-to)/,
  ],
  whitelistPatternsChildren: [],
  extractors: [
    {
      extractor(content) {
        return content.match(/[A-z0-9-:\\/]+/g) || [];
      },
      extensions: ['html', 'vue', 'js'],
    },
  ],
});

const plugins = [tailwindcss, autoprefixer];

if (process.env.NODE_ENV === 'production') {
  plugins.push(purgecss);
}

module.exports = {
  plugins,
};
