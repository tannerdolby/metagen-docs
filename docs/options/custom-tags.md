---
sidebar_position: 4
---

# Custom
The following represents custom metagen arguments.

## Arguments
The following arguments are supported by this plugin.

### custom
Generate custom tags. Accepts an array of tag objects:
```
{
  tag: String,
  text: String
  attrs: Object
  selfClosing: Boolean
}
```

```njk
---
custom: [
  {tag: 'meta', attrs: {name: 'foobar', content: 'fizz'}},
  {tag: 'link', attrs: {rel: 'stylesheet', href: 'print.css', media: 'print'}},
  {tag: 'link', attrs: {rel: 'preload', href: 'myFont.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous'}}
]
---
{% metagen 
  custom=custom
%}
=>
<meta name="foobar" content="fizz">
<link rel="stylesheet" href="print.css" media="print">
<link rel="preload" href="myFont.woff2" as="font" type="font/woff2" crossorigin="anonymous">
```

### minified
A boolean value which determines if metagen output is minified.