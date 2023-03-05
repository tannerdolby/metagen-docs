---
sidebar_position: 4
---

# Custom Tags
The following represents custom metagen options.

## Parameters
The following options are supported by this plugin.

### custom
An option for generating custom tags. Accepts an array of "element" arrays. E.g. `custom=[["meta", "", {name: "myCustomTag", content: "foo" }]]`

```js
Array[0]: String Tag name.
Array[1]: String Text content.
Array[2]: Object representing attribute key/value pairs.
Array[3]: Boolean representing self closing tags. (default = false)
```

### minified
A boolean value which determines if the metagen output is minified. E.g. `minified=true`