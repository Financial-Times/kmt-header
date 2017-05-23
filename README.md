# kmt-header [![Circle CI](https://circleci.com/gh/Financial-Times/kmt-header.svg?style=svg)](https://circleci.com/gh/Financial-Times/kmt-header)

Header component for KAT.

KAT (Knowledge & administration tools) is a part of ft.com application created for Financial Times B2B clients.

## Getting started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

```
$ git clone git@github.com:Financial-Times/kmt-header.git
$ npm install
$ bower install
```

Then you can run `$ npm start` and go to `http://local.ft.com:5000/` in your browser to see the footer module running locally on your machine.

To be able to manage footer main settings you can create an `.env` file in the root directory with the following variables:

```
NODE_ENV=development
PORT=5000

FOOTER_THEME="theme-dark"
FOOTER_TYPE="short"
FOOTER_PADDING_TOP="10"
FOOTER_HELP_LINK="http://help.ft.com/help/b2b-support/knowledge-administration-tool/"
```

#### Important notes
If you see an error like `Error: Node Sass does not yet support your current environment: OS X 64-bit with Unsupported runtime` you will probably need to run `$ npm rebuild node-sass` to overcome this. In addition you might need to update `origami-build-tools`.

## Testing
We are using [Jest](https://facebook.github.io/jest/) for testing React components, and [Enzyme](http://airbnb.io/enzyme/) for rendering components inside our tests.

**Please note that due to using an earlier version of React, we are using version 1.4.x of Enzyme, so not all of the latest functions are available to us. Please refer to [the docs for Enzyme 1.4.x](https://github.com/airbnb/enzyme/tree/442147f669abace1eeae08040885893894ae0505/docs) for a list of available functions.**

Tests for React components should be saved as `test.js` inside the folder for that component.

### Running tests
 - To run a one-time test: `$ npm test`;
 - To run tests and watch for changes: `$ npm run testWatch`;
 - `$ npm test -- --coverage` to see the coverage of tested files.

## Deployment
This component has been created to be included throughout other KAT components.

### How to update a repo that uses the component to the new version
If you want to update connected components with the latest version, you need to follow the following steps:
 1. Create a new repository release on gitHub. Please follow naming convention of previous releases.
 2. Go to `bower.json` file of the component you want to update, and change `"kmt-header"` dependency version to the [newly released one](https://github.com/Financial-Times/kmt-header/releases).
 3. Run `$ bower install` in the component repository.

 The following KAT components are currently using `kmt-header`:
  - [kmt-overview](https://github.com/Financial-Times/kmt-overview)
  - [kmt-myft](https://github.com/Financial-Times/kmt-myft)
  - [kat-usage-report](https://github.com/Financial-Times/kat-usage-report)

 ### How to use the component

## Installation:
```
bower install --S kmt-header
```

## Usage:
### Load the CSS:
```scss
@import '../bower_components/kmt-header/main';
```

### Load the JS:
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

### `options`:
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
rootEl: "#root"
// {String|DOM element} - optional - Query string or DOM element inside which the KMT Header will be placed.
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

## Feedback form
`kmt-header` doesn't save the data entered in the feedback form, it just passes it to `KmtHeaderNs.helpers.doRequest()`. The `doRequest()` method in `kmt-header` is only a stub. Any module(s) that needs to submit the feedback needs to supply a function to `doRequest()` that will handle this.
