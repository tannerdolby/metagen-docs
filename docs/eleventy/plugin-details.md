---
sidebar_position: 1
---

# Plugin Details

Providing all of the supported arguments to `metagen` shown in the [intro](/docs/intro#what-does-it-do) is recommended for baseline social share. If you want to add more meta tags that are not listed in the basic introduction example, see [plugin options](/docs/category/options) for supported tags or create your own custom tags. You might only need a few `<meta>` tags instead of the whole set, simply provide the arguments you need and the ones not included won't be generated.

Besides the default generated tags, only the arguments you provide data for will be generated. This allows you to include some of your own tags alongside metagen if you need. Template variables can be used in the Nunjucks and Liquid shortcode arguments without the curly braces or quotes like `title=page.url`. Take a look at [use your template data](/docs/eleventy/use-template-data) for more on template variable usage.

## Shortcode Default Tags

If atleast one parameter is provided to `metagen`:

```liquid
{% metagen 
  comments=true
%}
```

the default `<meta>` tags aside from the main Open Graph and Twitter card data are:

```html
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:locale" content="en_US">
<!-- Twitter -->
<meta name="twitter:card" content="summary">
```

Using `{% metagen %}` without any arguments will log an error to the console and return an empty string.

## Nunjucks Usage

Commas are required between arguments in Nunjucks shortcodes.

```njk
{% metagen
  title="Some title",
  desc="Some desc",
  comments=true,
%}
```

To use the shortcode with short-hand syntax. You can define an object in frontmatter, global data or another data source with the required key/value pairs and supply the shortcode with a single object parameter.

```njk
---
metadata:
  title: Eleventy Plugin Add Meta Tags
  desc: An eleventy shortcode for generating meta tags.
  url: https://tannerdolby.com
  img: https://tannerdolby.com/images/arch-spiral-large.jpg
  img_alt: Archimedean Spiral
  twitter_card_type: summary_large_image
  twitter_handle: tannerdolby
  name: Tanner Dolby
  custom:
    - {tag: "meta", attrs: { name: "fizz", content: "buzz"}}
---
{% metagen metadata %}
```

generates the following metadata:

```html
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Eleventy Plugin Add Meta Tags</title>
<meta name="author" content="Tanner Dolby">
<meta name="description" content="An eleventy shortcode for generating meta tags.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://tannerdolby.com">
<meta property="og:locale" content="en_US">
<meta property="og:title" content="Eleventy Plugin Add Meta Tags">
<meta property="og:description" content="An eleventy shortcode for generating meta tags.">
<meta property="og:image" content="https://tannerdolby.com/images/arch-spiral-large.jpg">
<meta property="og:image:alt" content="Archimedean Spiral">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@tannerdolby">
<meta name="twitter:creator" content="@tannerdolby">
<meta name="twitter:url" content="https://tannerdolby.com">
<meta name="twitter:title" content="Eleventy Plugin Add Meta Tags">
<meta name="twitter:description" content="An eleventy shortcode for generating meta tags.">
<meta name="twitter:image" content="https://tannerdolby.com/images/arch-spiral-large.jpg">
<meta name="twitter:image:alt" content="Archimedean Spiral">
<link rel="canonical" href="https://tannerdolby.com">
<meta name="fizz" content="buzz">
```

## Liquid Usage

If you are using Liquid (which is the default templating engine in Eleventy). Commas are optional between arguments in the shortcode.

```liquid
{% metagen title="Foo" desc="bar" %}
```

If you want to use the short-hand syntax, provide a metadata object containing the expected fields. You can pass an object from global data, frontmatter, or whichever data source in the cascade.

```liquid
---
metadata: 
  title: Eleventy Plugin Add Meta Tags
  desc: An eleventy shortcode for generating meta tags.
  url: https://tannerdolby.com
  img: https://tannerdolby.com/images/arch-spiral-large.jpg
  img_alt: Archimedean Spiral
  twitter_card_type: summary_large_image
  twitter_handle: tannerdolby
  name: Tanner Dolby
---
{% metagen metadata %}
```

## Advanced Usage
Using all or many of the supported shortcode parameters.

```
---
metadata:
  title: Eleventy Plugin Meta Generator
  desc: An eleventy shortcode for generating meta tags.
  url: https://tannerdolby.com
  img: https://tannerdolby.com/images/arch-spiral-large.jpg
  img_alt: Archimedean Spiral
  twitter_card_type: summary_large_image
  twitter_handle: tannerdolby
  name: Tanner Dolby
  generator: 11ty
  comments: true
  site_name: Metagen
  robots: noindex
  crawlers:
    googlebot: noindex
    googlebot-news: nosnippet
  preconnect: [{url: https://fonts.googleapis.com/, crossorigin: true}, https://google.com]
  dns_prefetch: [https://fonts.googleapis.com/, https://google.com]
  og_alternate_locales: [es, zh, ja]
  css: [style.css, foo.css:rel="preload":as="style"]
  js: [foo.js, bar.js:async:type="module", fizz.js:defer]
  inline_css: "h1 {color: #f06}"
  inline_js:
    - console.log("hello, world");
    - {type: "application/json", id: "some-id", js: '{"data": "hello"}'}
  custom:
    - {tag: "meta", attrs: {name: "foobar", content: "fizz"}}
    - {tag: "link", attrs: {rel: "stylesheet", href: "print.css", media: "print"}}
    - {tag: "link", attrs: {rel: "preload", href: "myFont.woff2", as: "font", type: "font/woff2", crossorigin: "anonymous"}}
---

{% metagen metadata %}
```

generates the following metadata:

```html
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Eleventy Plugin Meta Generator</title>
<link rel="preconnect" href="https://fonts.googleapis.com/" crossorigin>
<link rel="preconnect" href="https://google.com">
<link rel="dns-prefetch" href="https://fonts.googleapis.com/">
<link rel="dns-prefetch" href="https://google.com">
<meta name="author" content="Tanner Dolby">
<meta name="description" content="An eleventy shortcode for generating meta tags.">
<meta name="robots" content="noindex">
<meta name="googlebot" content="noindex">
<meta name="googlebot-news" content="nosnippet">
<meta name="generator" content="11ty">
<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://tannerdolby.com">
<meta property="og:site_name" content="Metagen">
<meta property="og:locale:alternate" content="es">
<meta property="og:locale:alternate" content="zh">
<meta property="og:locale:alternate" content="ja">
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
<meta name="foobar" content="fizz">
<link rel="stylesheet" href="print.css" media="print">
<link rel="preload" href="myFont.woff2" as="font" type="font/woff2" crossorigin="anonymous">
<link rel="stylesheet" href="style.css">
<link rel="preload" as="style" href="foo.css">
<style>h1 {color: #f06}</style>
<script src="foo.js"></script>
<script src="bar.js" async type="module"></script>
<script src="fizz.js" defer></script>
<script>console.log("hello, world")</script>
<script type="application/json" id="some-id">{"data": "hello"}</script>
```
