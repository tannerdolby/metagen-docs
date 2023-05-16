---
sidebar_position: 2
---

# Use Your Template Data
To make your metadata dynamic, you can use template data as arguments to the shortcode, without quotes or braces:

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

which generates the metadata:

```html
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Some title</title>
<meta name="author" content="Tanner Dolby">
<meta name="description" content="Some description">
<meta property="og:type" content="website">
<meta property="og:url" content="https://tannerdolby.com/">
<meta property="og:locale" content="en_US">
<meta property="og:title" content="Some title">
<meta property="og:description" content="Some description">
<meta property="og:image" content="https://tannerdolby.com/images/arch-spiral-large.jpg">
<meta property="og:image:alt" content="Archimedean spiral">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@tannerdolby">
<meta name="twitter:creator" content="@tannerdolby">
<meta name="twitter:url" content="https://tannerdolby.com/">
<meta name="twitter:title" content="Some title">
<meta name="twitter:description" content="Some description">
<meta name="twitter:image" content="https://tannerdolby.com/images/arch-spiral-large.jpg">
<meta name="twitter:image:alt" content="Archimedean spiral">
<link rel="canonical" href="https://tannerdolby.com/">
```

As a general rule, don't forget you're in a templating engine context when using the `metagen` shortcode. Use template variables as shortcode arguments without the quotes or curly braces like `title=var`.
