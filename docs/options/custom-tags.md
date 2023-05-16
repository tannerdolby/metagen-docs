---
sidebar_position: 4
---

# Custom
The following represents custom metagen options.

## Parameters
The following options are supported by this plugin.

### custom
An option for generating custom tags. Accepts an array of objects. E.g. `custom=[["meta", "", {name: "myCustomTag", content: "foo" }]]`

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
A boolean value which determines if the metagen output is minified. E.g. `minified=true`