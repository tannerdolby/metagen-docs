---
sidebar_position: 3
---

# Twitter
The arguments that will be used for Twitter.

- https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup

## Arguments
The following options are supported by this plugin for Twitter social share.

### twitter_card_type
The content for `twitter:card`

### twitter_handle
The content for `twitter:site` and `twitter:creator`

### creator_handle
The content for `twitter:creator`. Used with `twitter_card_type="summary_large_image"` cards.

### twitter_title
The content for `twitter:title`

### twitter_image
The content for `twitter:image`

### twitter_image_alt
The content for `twitter:image:alt`

### twitter_desc
The content for `twitter:description`

### twitter_attr_name
Define attribute name for the Twitter set of meta tags. For example, use twitter_attr_name="property" to produce `<meta property="foo" content="hi>`

### twitter_comment
Display a custom HTML comment for the set of Twitter tags. Requires `comments=true`
