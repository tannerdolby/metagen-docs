---
sidebar_position: 4
---

# Custom
The following fields represent custom `metagen` arguments.

## Arguments
The following acustom rguments are supported by this plugin.

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

In the example below I defined some front matter in a Nunjucks template then pass that template variable to the `metagen` shortcode for an 11ty site.

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
```
Outputs

```html
<meta name="foobar" content="fizz">
<link rel="stylesheet" href="print.css" media="print">
<link rel="preload" href="myFont.woff2" as="font" type="font/woff2" crossorigin="anonymous">
```

Outside of Nunjucks templates, as long as you provide an array of objects to `metagen` in a JavaScript context it will work like this:

```js
const metagen = require('meta-generator');

const customTags = [
  {tag: 'meta', attrs: { name: 'foobar', content: 'fizz' }},
  {tag: 'link', attrs: { rel: 'stylesheet', href: 'print.css', media: 'print' }},
  {tag: 'link', attrs: { rel: 'preload', href: 'myFont.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' }},
]

const metadata = metagen({custom: customTags});
```

Outputs

```html
[
  '<meta charset="utf-8">',
  '<meta http-equiv="X-UA-Compatible" content="IE=edge">',
  '<meta name="viewport" content="width=device-width, initial-scale=1">',
  '<meta property="og:type" content="website">',
  '<meta property="og:locale" content="en_US">',
  '<meta name="twitter:card" content="summary">',
  '<meta name="foobar" content="fizz">',
  '<link rel="stylesheet" href="print.css" media="print">',
  '<link rel="preload" href="myFont.woff2" as="font" type="font/woff2" crossorigin="anonymous">',
]
```

### minified
A boolean value which determines if metagen output should be returned as a minified string.

```js
const metadata = metagen({
  title: 'foo',
  minified: true
});
```
Outputs

```html
<meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1"><title>foo</title><meta name="title" content="foo"><meta property="og:type" content="website"><meta property="og:locale" content="en_US"><meta property="og:title" content="foo"><meta name="twitter:card" content="summary"><meta name="twitter:title" content="foo">
```