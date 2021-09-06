const metagen = require("eleventy-plugin-metagen");
const CleanCSS = require("clean-css");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { minify } = require("terser");

module.exports = (eleventyConfig) => {

    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/js");
    eleventyConfig.addPassthroughCopy("./src/favicons");

    eleventyConfig.addPlugin(metagen);
    eleventyConfig.addPlugin(CleanCSS);
    eleventyConfig.addPlugin(syntaxHighlight);

    eleventyConfig.addPlugin(syntaxHighlight, {
        templateFormats: ["njk", "md"],
    });

    eleventyConfig.addNunjucksAsyncFilter("jsmin", async function (
        code,
        callback
      ) {
        try {
          const minified = await minify(code);
          callback(null, minified.code);
        } catch (err) {
          console.error("Terser error: ", err);
          // Fail gracefully.
          callback(null, code);
        }
      });

    eleventyConfig.addFilter("cssmin", function(code) {
        return new CleanCSS({}).minify(code).styles;
    });

    eleventyConfig.addFilter("date", function(date) {
        return date.toDateString();
    });

    eleventyConfig.addShortcode('getYear', function() {
        const date = new Date().getFullYear();
        return `${date}`;
    });

    markdownTemplateEngine: "njk";

    return {
        dir: {
            input: 'src',
            output: '_site',
            data: '_data',
            includes: '_includes',
            layouts: '_includes/layouts'
        },
        templateFormats: ['md', 'njk', 'liquid'],
        passthroughFileCopy: true
    }
}