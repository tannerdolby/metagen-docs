---
sidebar_position: 2
---

# Open Graph
The parameters that will be used for Open Graph.

## Parameters
The following options are supported by this plugin for Open Graph social share.

### og_title
The content for `og:title` 
default: `title`

### og_desc
The content for `og:description` 
default: `desc`

### img
The content for `og:image`

### type
The content for `og:type`
options: `article`, `product`  
default: `website`

### site_name
The content for `og:site_name`

### img_width
The content for `og:image:width`

### img_height
The content for `og:image:height`

### img_alt
The content for `og:image:alt` and `twitter:image:alt`. If an `og:image` is defined, it is recommended to define this field to generate the `og:image:alt` tag.

### og_comment
Display a custom comment for the Open Graph set of tags.  
requires: `comments: true`

### og_img_type
A [MIME type](https://en.wikipedia.org/wiki/Internet_media_type) for the image. E.g. `image/jpeg`

### og_secure_img_url
An alternate url to use for the image if the webpage requires HTTPS.

### og_audio
The content for `og:audio`

### og_video
The content for `og:video`

### og_determiner
The content for `og:determiner`

### og_alternate_locales
An array of alternate locale strings. E.g. `og_alternate_locales=["es", "zh", "ja"]`