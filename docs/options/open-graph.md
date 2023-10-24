---
sidebar_position: 2
---

# Open Graph
The arguments that will be used for Open Graph.

- https://ogp.me/

## Parameters
The following options are supported by this plugin for Open Graph social share.

### locale
The content for `og:locale`. A string representing the locale.

default: `en_US`

### type
The content for `og:type`

options: "article", "product"

default: "website"

### site_name
The content for `og:site_name`

### og_title
The content for `og:title` 

default: `title`

### og_desc
The content for `og:description` 

default: `desc`

### og_image
The content for `og:image`

### og_image_alt
The content for `og:image:alt`. If an `og:image` is defined, it's recommended to define this field to generate the `og:image:alt` tag.

### og_image_width
The content for `og:image:width`

### og_image_height
The content for `og:image:height`

### og_image_type
The content for `og:image:type`. A [MIME type](https://en.wikipedia.org/wiki/Internet_media_type) for the image. E.g. `image/jpeg`

### og_secure_image_url
The content for `og:image:secure_url` An alternate url to use for the image if the webpage requires HTTPS.

### og_audio
The content for `og:audio`

### og_video
The content for `og:video`

### og_determiner
The content for `og:determiner`

### og_alternate_locales
The content for `og:locale:alternate`. An array of alternate locale strings. E.g. `og_alternate_locales=["es", "zh", "ja"]`

### og_comment
Display a custom comment for the set of Open Graph tags. Requires `comments=true`
