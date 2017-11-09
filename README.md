# kat-header [![Circle CI](https://circleci.com/gh/Financial-Times/kmt-header.svg?style=svg)](https://circleci.com/gh/Financial-Times/kmt-header)

Handlebars header template for KAT apps.

## Usage

If using `n-internal-tool` you'll have to add the path to your `node-modules/@financial-times` directory as the `partialsDirectory` option to `n-internal-tool` so that it can resolve the partial location.

### HTML
```sh
npm install --save @financial-times/kat-header
```
or
```sh
bower install --save kat-header
```

Use handlebars template
```hbs
{{> kat-header/header }}
```

It will display a licence switcher form if a `licenceList` property exists in the template. See the [demo](./demos/app.js) for example usage. /* You should provide a route for the core form to fallback to, this ideally would be a route that directs the user to the same page but for the licence selected via the form */

### Styles
Include the styles for the header by adding the following to your SCSS
```scss
@import 'kat-header/main';
```

### Javascript

Include the javascript by adding the following to your JS and initialise when ready using the `init` function. This will add an enhanced experience to the licence switcher.
```js
const katHeader = require('kat-header');

// when ready
katHeader.init();
```

## Local Development

### Demos

Run the demos using
```sh
make build run
```
And view the demos on `http://local.ft.com:5005/`
