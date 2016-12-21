# kmt-header [![Circle CI](https://circleci.com/gh/Financial-Times/kmt-header.svg?style=svg)](https://circleci.com/gh/Financial-Times/kmt-header)

Header component for KMT app


## Building this project
`npm start` should run a gulp based build before serving up the an example of the page.
However if you see an error like:
`Error: Node Sass does not yet support your current environment: OS X 64-bit with Unsupported runtime`
You will probably need to run `npm rebuild node-sass` to overcome this. You should probably update `origami-build-tools` at the same time.

###Installation:
```
bower install --S kmt-header
```
=======

###Usage:
#####Load the CSS:
```scss
@import '../bower_components/kmt-header/main';
```

#####Load the JS:
* **Inside** React Redux app:
```js
// first add the header reducers to the parent app reducers
import { KmtHeaderNs } from "kmt-header/main";
//...
combineReducers(Object.assign({}, parentAppReducers, { KmtHeaderNs }));
```
```js
// then include and use in a component/container
import { KmtHeaderContainer } from "kmt-header/main";
//...
<KmtHeaderContainer />
```

* **Outside** React Redux app (normal standalone use):
```js
// include and use in a component/container
import KmtHeader from "kmt-header/main";
//...
KmtHeader.init(options);
```
=======

###Options:
* React Redux store data (both for when **Inside** and **Outside** React Redux app):
```js
KmtHeaderNs: { // {Object} - optional - Namespace for the KMT header React Redux store - if store data is provided it needs to be wrapped inside this object
  mainMenu: { // {Object} - optional - Menu data. If provided, all the child elements are required
    items: [ // {Array} Links to be shown
      { // {Object} Link data
        label: "DASHBOARD", // {String} Link label
        href: "#" // {String} Link href
      }
    ],
    enableMobile: true // {Bool} Enable/disable mobile menu
  },
  headerTitle: { // {Object} - optional -  Header text data. If provided, all the child elements are required
    label: "KMT", // {String} Header main title
    summary: "KNOWLEDGE MANAGER TOOLS" // {String} - optional - Header summary
  },
  extraActions: { // {Object} - optional -  Header extra action data. If provided, all the child elements are required
    items: [ // {Object} links to be shown
      { // {Object} Link data
        label: "Logout", // {String} Link label
        href: "#" // {String} Link href
      }
    ]
  }
}
```

* Normal standalone use:
```js
rootEl: "#root" // {String|DOM element} - optional - Query string or DOM element inside which the KMT Header will be placed.
```

```js
// Example
const options = {
  rootEl: "#root",
  data: {
    KmtHeaderNs: {
      headerTitle: {
        label: "KMT",
        summary: "KNOWLEDGE MANAGER TOOLS"
      }
    }
  }
};

KmtHeader.init(options);
```
