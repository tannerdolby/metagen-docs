---
title: Eleventy Plugin Metagen
date: 2021-09-06
npm_link: https://www.npmjs.com/package/eleventy-plugin-metagen
layout: main.njk
templateEngineOverride: njk, md
---

# {{ title }}

eleventy-plugin-metagen is a `<meta>` tag generator for sites built with [Eleventy](https://11ty.dev). Generate meta tags for [Open Graph](https://ogp.me/) and [Twitter](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup) along with some other useful tags. All of the tags necessary for a baseline social share functionality are included with this plugin along with some additional tags for more custom use cases.

<nav>
  <details>
    <summary>Table of Contents</summary>
      <ul class="toc">
        <li><a href="#installation">Installation</a></li>
        <li><a href="#what_does_it_do?">What does it do?</a></li>
        <li><a href="#custom_usage">Custom usage</a></li>
        <li><a href="#shortcode_default_tags">Shortcode Default Tags</a></li>
        <li><a href="#shorthand_nunjucks_usage">Shorthand Nunjucks Usage</a></li>
        <li><a href="#use_your_template_data">Use Your Template Data</a></li>
        <li><a href="#liquid_usage">Liquid usage</a></li>
        <li><a href="#shortcode_parameters">Shortcode Parameters</a></li>
        <li><a href="#general">General</a></li>
        <li><a href="#open_graph">Open Graph</a></li>
        <li><a href="#twitter_card">Twitter Card</a></li>
        <li><a href="#custom_tags">Custom Tags</a></li>
      </ul>
  </details>
</nav>

## Installation
In your Eleventy project, [install the plugin](https://www.npmjs.com/package/eleventy-plugin-metagen) from npm:

```js
npm install eleventy-plugin-metagen
```

Then add it to your [Eleventy Config](https://www.11ty.dev/docs/config/) file:

{% raw %}
```js
const metagen = require('eleventy-plugin-metagen');

module.exports = (eleventyConfig) => {
    eleventyConfig.addPlugin(metagen);
};
```
{% endraw %}

## What does it do?
The plugin turns [11ty shortcodes](https://www.11ty.dev/docs/shortcodes/) like this:

{% raw %}

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
{% endraw %}
into `<meta>` tags and other document metadata like this:

{% raw %}
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
{% endraw %}

## Custom Usage
For a baseline social share functionality, providing all of the comma separated arguments to `metagen` shown in the example usage above is recommended. If you want to add more meta tags that are not listed in the example, see [parameters](#shortcode_parameters) for supported tags. You might only need a few `<meta>` tags instead of the whole set, simply provide the arguments you need and the ones not included won't generate `<meta>` tags.

Besides the default generated `<meta>` tags, only the arguments you provide data for will be generated as `<meta>` tags. This allows you to include some of your own tags alongside `metagen` if you need. Template variables can be used in the Nunjucks and Liquid shortcode arguments without the curly braces or quotes like `title=page.url` (Nunjucks) or `title` (Liquid). More on template variable usage [below](#use_your_template_data)

## Shortcode Default Tags

If atleast one parameter is provided to `metagen`:

{% raw %}
```liquid
{% metagen 
  comments=true
%}
```
{% endraw %}

the default `<meta>` tags aside from the main Open Graph and Twitter card data are:

{% raw %}
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
{% endraw %}

The `title` parameter provides data for `<title>`. If `title` is not defined within `metagen`, the `<title>` element will not be generated with the above default tags. The same rules apply for `name` and `desc`. All other arguments if omitted, will not have meta tags generated.

Using {% raw %}`{% metagen %}`{% endraw %} without any arguments will throw `Error: No data was added into the meta generator` and return an empty string.

## Shorthand Nunjucks Usage

To use the shortcode as a one-liner. You can define an object in frontmatter, global data or another data source with the required key/value pairs and supply the shortcode with a single object parameter. 

{% raw %}
```liquid
---
data: 
    title: Eleventy Plugin Add Meta Tags
    desc: An eleventy shortcode for generating meta tags.
    url: https://tannerdolby.com
    img: https://tannerdolby.com/images/arch-spiral-large.jpg
    img_alt: Archimedean Spiral
    twitter_card_type: summary_large_image
    twitter_handle: tannerdolby
    name: Tanner Dolby
---
<head>
  {% metagen data %}
</head>
```
{% endraw %}

## Use Your Template Data
To make your metadata dynamic, you can use template data as arguments to the shortcode, without quotes or braces:

{% raw %}
```liquid
---
title: Some title
desc: Some description
metadata:
  title: Some other title
  desc: Some other description
url: https://tannerdolby.com
image: https://tannerdolby.com/images/arch-spiral-large.jpg
alt: Archimedean spiral
type: summary_large_image 
twitter: tannerdolby
name: Tanner Dolby
---
{% metagen
    title=title or metadata.title,
    desc=desc or metadata.desc,
    url=url + page.url,
    img=image,
    img_alt=alt,
    twitter_card_type=type,
    twitter_handle=twitter,
    name=name
%}
```
{% endraw %}

As a general rule, don't forget your in a templating engine context. Use your variables in the shortcode as you would inside {% raw %}`{% var %}`{% endraw %} tags or {% raw %}`{{ var }}`{% endraw %} without the curly braces like `title=var`.

### Liquid Usage

If you would like to use Liquid (which is the default templating engine in Eleventy). Then utilize the following syntax by passing the shortcode a metadata object containing the expected fields.

Note: You can pass an object from global data or frontmatter to `metagen` using Nunjucks like shown below as well.

{% raw %}
```liquid
---
data: 
    title: Eleventy Plugin Add Meta Tags
    desc: An eleventy shortcode for generating meta tags.
    url: https://tannerdolby.com
    img: https://tannerdolby.com/images/arch-spiral-large.jpg
    img_alt: Archimedean Spiral
    twitter_card_type: summary_large_image
    twitter_handle: tannerdolby
    name: Tanner Dolby
    custom:
    - ["meta", "", { foo: "bar"}]
---
<head>
  {% metagen data %}
</head>
```
{% endraw %}

## Shortcode Parameters
A list containing all of the parameters this plugin accepts. If you can't find a parameter that suits your all of your needs, feel free to [open an issue](https://github.com/tannerdolby/eleventy-plugin-metagen/issues) so we can get the parameter and/or corresponding meta tag added to the plugin.

<h3 class="tag-section" id="general">General</h3>

#### css
An array of CSS files to be generated as `<link rel="stylesheet" href="file[i]">`. E.g. `css=["style.css", "foo.css"]`

#### inline_css
A string representing the inline content. E.g. `inline_css="h1 { color: #f06; }"`

#### js
An array of JavaScript files to be generated as `<script src="file[i]">` or `<script src="file[i]" async>`. E.g. `js=["script.js", ["bar.js", "async"]]`

#### inline_js
A string representing the inline content. E.g. `inline_js="console.log('hello world');"`

#### title
The content for `<title>`, `<meta name="title">`, `og:title` and `twitter:title`. If `og_title` and `twitter_title` are defined they will override the fields.

#### url
The content for `<link rel="canonical">`, `og:url` and `twitter:url`

#### name
The content for `<meta name="author">`

#### desc
The content for `<meta name="description">`, `og:description`, and  `twitter:description` if `og_desc` or `twitter_desc` isn't defined.

#### locale
The locale tags are marked up in.  
default: `en_US` 

#### generator
The content for `<meta name="generator">`. The value must be a free-form string that identifies one of the software packages used to generate the document. This value must not be used on pages whose markup is not generated by software, e.g. pages whose markup was written by a user in a text editor.

#### comments
Display default comments for the Open Graph and Twitter tags.  
default: `false`

#### preconnect
The `href` value for `<link rel="preconnect">`. Accepts a string or an array of strings.

#### dns_prefetch
The `href` value for `<link rel="dns-prefetch">`. Accepts a string or an array of strings.

#### robots
The `content` value for `<meta name="robots">`. Accepts a string.

#### crawlers
The `name` and `content` values for `<meta name="" content="">` custom crawler tags. Accepts an object containing key value pairs where the key is the crawler name and value is the content. i.e. `crawlers={"googlebot": "noindex"}`

<h3 class="tag-section" id="open_graph">Open Graph</h3>

#### og_title
The content for `og:title` 
default: `title`

#### og_desc
The content for `og:description` 
default: `desc`

#### img
The content for `og:image`

#### type
The content for `og:type`
options: `article`, `product`  
default: `website`

#### site_name
The content for `og:site_name`

#### img_width
The content for `og:image:width`

#### img_height
The content for `og:image:height`

#### img_alt
The content for `og:image:alt` and `twitter:image:alt`. If an `og:image` is defined, it is recommended to define this field to generate the `og:image:alt` tag.

#### og_comment
Display a custom comment for the Open Graph set of tags.  
requires: `comments: true`

#### og_img_type
A [MIME type](https://en.wikipedia.org/wiki/Internet_media_type) for the image. E.g. `image/jpeg`

#### og_secure_img_url
An alternate url to use for the image if the webpage requires HTTPS.

#### og_audio
The content for `og:audio`

#### og_video
The content for `og:video`

#### og_determiner
The content for `og:determiner`

#### og_alternate_locales
An array of alternate locale strings. E.g. `og_alternate_locales=["es", "zh", "ja"]`

<h3 class="tag-section" id="twitter_card">Twitter Card</h3>

#### twitter_card_type
The content for `twitter:card`
options: `summary_large_image`  
default: `summary`

#### twitter_handle
The content for `twitter:site` or `twitter:creator` if `twitter_card_type: summary_large_image`.

#### creator_handle
The content for `twitter:creator`. This tag is used if `twitter_card_type: summary_large_image`.

#### twitter_title
The content for `twitter:title` 
default: `title`

#### img
The content for `twitter:image`

#### img_alt
The content for `twitter:image:alt`

#### twitter_desc
The content for `twitter:description`
default: `desc`

#### twitter_comment
Display a custom comment for the Twitter set of tags.  
requires: `comments: true`

#### attr_name
Define attribute name for the Twitter set of meta tags.  
options: `property`  
default: `name`

<h3 class="tag-section" id="custom_tags">Custom Tags</h3>

#### custom
An option for generating custom tags. Accepts an array of "element" arrays. Array[3] or Array[4]. E.g. `custom=[["meta", "", {name: "myCustomTag", content: "foo" }]]`

```js
Array[0]: String Tag name.
Array[1]: String Text content.
Array[2]: Object representing attribute key/value pairs.
Array[3]: Boolean representing self closing tags. (default = false)
```

#### minified
A boolean value which determines if the metagen output is minified.