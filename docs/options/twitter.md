---
sidebar_position: 3
---

# Twitter
The parameters that will be used for Twitter.

## Parameters
The following options are supported by this plugin for Twitter social share.

### twitter_card_type
The content for `twitter:card`
options: `summary_large_image`  
default: `summary`

### twitter_handle
The content for `twitter:site` or `twitter:creator` if `twitter_card_type: summary_large_image`.

### creator_handle
The content for `twitter:creator`. This tag is used if `twitter_card_type: summary_large_image`.

### twitter_title
The content for `twitter:title` 
default: `title`

### img
The content for `twitter:image`

### img_alt
The content for `twitter:image:alt`

### twitter_desc
The content for `twitter:description`
default: `desc`

### twitter_comment
Display a custom comment for the Twitter set of tags.  
requires: `comments: true`

### attr_name
Define attribute name for the Twitter set of meta tags.  
options: `property`  
default: `name`