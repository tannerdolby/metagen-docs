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

As a general rule, don't forget your in a templating engine context. Use your variables in the shortcode as you would inside `{% var %}` tags or `{{ var }}` without the curly braces like `title=var`.
