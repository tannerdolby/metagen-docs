---
sidebar_position: 1
---

# Plugin Details

For a baseline social share functionality, providing all of the comma separated arguments to `metagen` shown in the [intro](/docs/intro) is recommended. If you want to add more meta tags that are not listed in the basic introduction example, see [parameters](/docs/category/options) for supported tags. You might only need a few `<meta>` tags instead of the whole set, simply provide the arguments you need and the ones not included won't generate meta tags.

Besides the default generated `<meta>` tags, only the arguments you provide data for will be generated as meta tags. This allows you to include some of your own tags alongside `metagen` if you need. Template variables can be used in the Nunjucks and Liquid shortcode arguments without the curly braces or quotes like `title=page.url` (Nunjucks) or `title` (Liquid). Take a look at [using your template data](/docs/basics/use-template-data) for more on template variable usage.

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

The `title` parameter provides data for `<title>`. If title is not defined within `metagen`, the title element will not be generated with the above default tags. The same rules apply for `name` and `desc`. All other arguments if omitted, will not have meta tags generated.

Using `{% metagen %}` without any arguments will throw an error and returns an empty string.

```
Error: No data was added into the meta generator
```

## Shorthand Nunjucks Usage

To use the shortcode as a one-liner. You can define an object in frontmatter, global data or another data source with the required key/value pairs and supply the shortcode with a single object parameter. 

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

## Liquid Usage

If you would like to use Liquid (which is the default templating engine in Eleventy). Then utilize the following syntax by passing the shortcode a metadata object containing the expected fields.

Note: You can pass an object from global data or frontmatter to `metagen` using Nunjucks like shown below as well.

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