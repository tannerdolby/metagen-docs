const metagen = require("eleventy-plugin-metagen");
const CleanCSS = require("clean-css");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = (eleventyConfig) => {

    eleventyConfig.addPassthroughCopy("./src/_includes/css")

    eleventyConfig.addPlugin(metagen);
    eleventyConfig.addPlugin(CleanCSS);
    eleventyConfig.addPlugin(syntaxHighlight);

    eleventyConfig.addPlugin(syntaxHighlight, {
        templateFormats: ["njk", "md"],
    });

    eleventyConfig.addFilter("cssmin", function(code) {
        return new CleanCSS({}).minify(code).styles;
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