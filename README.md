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

### Navigation Config
Pass an to your handlebars template an object with a `nav` property.

This will have a `heading` property which will act as the heading of the page (defaults to "Knowledge & administration tools").

It also will take an `items` property which is an array of objects to populate the navigation links, each of these have the following properties:
- `name` - String - the text to render
- `href` - String - the URL to link to
- `flag` - String (optional) - if the nav item requires a flag to be on, the value of this is the flag name. When that flag is true this nav item will render
- `selected` - Boolean (optional) - when true this nav item will render as "selected" to denote the curent page. Only one nav item should be "selected".

There is a default config object you can use and extend if needed. You can use this in your controller as the example shown below:

```js
const { navigationConfig } = require('@financial-times/kat-header')

res.render('index', navigationConfig)
```


### Styles
Include the styles for the header by adding the following to your SCSS
```scss
@import 'kat-header/main';
```

### Javascript

Include the javascript by adding the following to your JS and initialise when ready using the `init` function. This will add an enhanced experience to the licence switcher.
```js
const katHeader = require('@financial-times/kat-header').init;

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
