# riot-md-mixin-flex [![Build Status](https://travis-ci.org/lukeed/riot-md-mixin-flex.svg?branch=master)](https://travis-ci.org/lukeed/riot-md-mixin-flex)

> A flexbox attribute mixin for [Riot.js](https://github.com/riot/riot) components.


## Install

```
$ npm install --save riot-md-mixin-flex
```


## Setup

For use with other [riot-md](https://github.com/search?q=user%3Alukeed+riot-md) components, this mixin must be named `'flex'`. See [`riot.mixin`](http://riotjs.com/guide/#mixins) for more information.

```js
const riot = require('riot');
const flex = require('riot-md-mixin-flex');

riot.mixin('flex', flex);
```

## Usage

```html
<md-toolbar -dflex -flex />
<!-- //=> <div class="md-toolbar" dflex flex></div> -->

<my-component -flex="2" />
<!-- //=> <div flex="2"></div> -->
```

See [md-flex-layout](https://github.com/lukeed/md-flex-layout) to make use of these new attributes.


## Attributes

#### -dflex
Appends a `dflex` attribute to the tag's `firstElementChild`.

#### -flex [int]
Appends a `flex` attribute to the tag's `firstElementChild`.

Passing a value to `-flex` will be forwarded to the tag child's attribute.

#### -flexrow
Appends a `flexrow` attribute to the tag's `firstElementChild`.

## License

MIT © [Luke Edwards](https://lukeed.com)
