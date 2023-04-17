---
sidebar_position: 1
---

# Introduction

Let's discover **eleventy-plugin-metagen in less than 5 minutes**.

eleventy-plugin-metagen is a meta tag generator for sites built with [Eleventy](https://11ty.dev). Generate meta tags for [Open Graph](https://ogp.me/) and [Twitter](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup) along with some other useful tags. All of the tags necessary for a baseline social share functionality are included with this plugin along with additional tags for more custom use cases.

## Getting Started

Get started by downloading [eleventy-plugin-metagen](https://www.npmjs.com/package/eleventy-plugin-metagen).

### What you'll need

- An [Eleventy](https://www.11ty.dev/) project
- [Node.js](https://nodejs.org/en/download/) version 14.x or above

### Setup
In your Eleventy project, [install the plugin](https://www.npmjs.com/package/eleventy-plugin-metagen) from npm:

```js
npm install eleventy-plugin-metagen
```

Then add it to your [Eleventy Config](https://www.11ty.dev/docs/config/) file:

```js
const metagen = require('eleventy-plugin-metagen');

module.exports = (eleventyConfig) => {
    eleventyConfig.addPlugin(metagen);
};
```

## What does it do?
The plugin turns [11ty shortcodes](https://www.11ty.dev/docs/shortcodes/) like this:

```liquid
{% metagen
  title="Eleventy Plugin Meta Generator",
  desc="An eleventy shortcode for generating meta tags.",
  url="https://tannerdolby.com",
  img="https://tannerdolby.com/images/arch-spiral-large.jpg",
  img_alt="Archimedean Spiral",
  twitter_card_type="summary_large_image",
  twitter_handle="tannerdolby",
  name="Tanner Dolby",
  generator="eleventy",
  comments=true,
  css=["style.css", "design.css"],
  js=["foo.js", ["bar.js", "async"]],
  inline_css="h1 { color: #f06; }",
  inline_js="console.log('hello, world.');",
  custom=[["meta", "", {name: "custom", content: "foo" }]]
%}
```

into `<meta>` tags and other document metadata like this:

```html
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Eleventy Plugin Meta Generator</title>
<meta name="author" content="Tanner Dolby">
<meta name="title" content="Eleventy Plugin Meta Generator">
<meta name="description" content="An eleventy shortcode for generating meta tags.">
<meta name="generator" content="eleventy">
<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://tannerdolby.com">
<meta property="og:locale" content="en_US">
<meta property="og:title" content="Eleventy Plugin Meta Generator">
<meta property="og:description" content="An eleventy shortcode for generating meta tags.">
<meta property="og:image" content="https://tannerdolby.com/images/arch-spiral-large.jpg">
<meta property="og:image:alt" content="Archimedean Spiral">
<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@tannerdolby">
<meta name="twitter:creator" content="@tannerdolby">
<meta name="twitter:url" content="https://tannerdolby.com">
<meta name="twitter:title" content="Eleventy Plugin Meta Generator">
<meta name="twitter:description" content="An eleventy shortcode for generating meta tags.">
<meta name="twitter:image" content="https://tannerdolby.com/images/arch-spiral-large.jpg">
<meta name="twitter:image:alt" content="Archimedean Spiral">
<link rel="canonical" href="https://tannerdolby.com">
<meta name="custom" content="foo">
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="design.css">
<style>h1 { color: #f06; }</style>
<script src="foo.js"></script>
<script src="bar.js" async></script>
<script>console.log('hello, world');</script>
```
