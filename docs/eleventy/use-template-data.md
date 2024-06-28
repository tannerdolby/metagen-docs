---
sidebar_position: 2
---

# Use Your Data
To make your page metadata dynamic, you can use template data from front matter or any data source as arguments to the shortcode in Nunjucks templates without quotes or curly braces. In the example below, I define some frontmatter and then use my template variables in the shortcode arguments.

> Note: This functionality only works in Nunjucks templates and will not work the same in Liquid templates. If you require this template data functionality, you will need to use the metagen shortcode strictly in Nunjucks templates. See [Liquid usage](/docs/eleventy/plugin-usage#liquid-usage) for what is possible in Liquid templates.

## Nunjucks Templates

```njk
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

which generates the metadata:

```html
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Some title</title>
<meta name="author" content="Tanner Dolby">
<meta name="description" content="Some description">
<meta property="og:type" content="website">
<meta property="og:url" content="https://tannerdolby.com">
<meta property="og:locale" content="en_US">
<meta property="og:title" content="Some title">
<meta property="og:description" content="Some description">
<meta property="og:image" content="https://tannerdolby.com/images/arch-spiral-large.jpg">
<meta property="og:image:alt" content="Archimedean spiral">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@tannerdolby">
<meta name="twitter:creator" content="@tannerdolby">
<meta name="twitter:url" content="https://tannerdolby.com">
<meta name="twitter:title" content="Some title">
<meta name="twitter:description" content="Some description">
<meta name="twitter:image" content="https://tannerdolby.com/images/arch-spiral-large.jpg">
<meta name="twitter:image:alt" content="Archimedean spiral">
<link rel="canonical" href="https://tannerdolby.com">
```

You can also define an object in front matter or some other data source then pass the metadata object to the shortcode like shown in [Nunjucks usage](/docs/eleventy/plugin-usage#nunjucks-usage)