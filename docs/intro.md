---
sidebar_position: 1
---

# Introduction

Let's discover **meta-generator in less than 5 minutes**.

This utility generates document metadata for websites. Create meta tags for [Open Graph](https://ogp.me/) and [Twitter](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup) along with other useful metadata. All of the tags necessary for baseline social share functionality are included with this plugin, with additional tags for more custom use cases.

## Getting Started

Get started by installing [meta-generator](https://www.npmjs.com/package/meta-generator).

### What you'll need

- Environment with JavaScript

### Setup
In your project, [install the plugin](https://www.npmjs.com/package/meta-generator) from npm:

```js
npm install meta-generator
```

Then use the utility wherever JavaScript is supported to generate document metadata.

```js
const metagen = require('meta-generator');

console.log(metagen({
  title: 'Meta Generator',
  desc: 'Utility for generating document metadata.',
  url: 'https://tannerdolby.com',
  img: 'https://tannerdolby.com/images/arch-spiral-large.jpg',
  img_alt: 'Archimedean Spiral',
  twitter_card_type: 'summary_large_image',
  twitter_handle: 'tannerdolby',
  name: 'Tanner Dolby',
  generator: 'eleventy',
  comments: true,
  css: ['style.css', 'design.css'],
  js: ['foo.js', 'bar.js:async'],
  inline_css: 'h1 { color: #f06; }',
  inline_js: 'console.log("hello, world.");'
}));
```

which returns array of `<meta>` tags and other document metadata or a minified string:

```
[
  '<meta charset="utf-8">',
  '<meta http-equiv="X-UA-Compatible" content="IE=edge">',
  '<meta name="viewport" content="width=device-width, initial-scale=1">',
  '<title>Meta Generator</title>',
  '<meta name="author" content="Tanner Dolby">',
  '<meta name="description" content="Utility for generating document metadata.">',
  '<meta name="generator" content="eleventy">',
  '<!-- Open Graph -->',
  '<meta property="og:type" content="website">',
  '<meta property="og:url" content="https://tannerdolby.com">',
  '<meta property="og:locale" content="en_US">',
  '<meta property="og:title" content="Meta Generator">',
  '<meta property="og:description" content="Utility for generating document metadata.">',
  '<meta property="og:image" content="https://tannerdolby.com/images/arch-spiral-large.jpg">',
  '<meta property="og:image:alt" content="Archimedean Spiral">',
  '<!-- Twitter -->',
  '<meta name="twitter:card" content="summary_large_image">',
  '<meta name="twitter:site" content="@tannerdolby">',
  '<meta name="twitter:creator" content="@tannerdolby">',
  '<meta name="twitter:url" content="https://tannerdolby.com">',
  '<meta name="twitter:title" content="Meta Generator">',
  '<meta name="twitter:description" content="Utility for generating document metadata.">',
  '<meta name="twitter:image" content="https://tannerdolby.com/images/arch-spiral-large.jpg">',
  '<meta name="twitter:image:alt" content="Archimedean Spiral">',
  '<link rel="canonical" href="https://tannerdolby.com">',
  '<link rel="stylesheet" href="style.css">',
  '<link rel="stylesheet" href="design.css">',
  '<style>h1 { color: #f06; }</style>',
  '<script src="foo.js"></script>',
  '<script src="bar.js" async></script>',
  '<script>console.log("hello, world.");</script>',
]
```
