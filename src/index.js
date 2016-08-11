import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import HeaderContainer from './containers/header';

class KmtHeader {
  constructor (rootEl) {
    if (!rootEl) {
      rootEl = document.body;
    } else if (typeof rootEl === 'string') {
      rootEl = document.querySelector(rootEl);
    }

    if (rootEl.hasAttribute('data-kmt-header--js')) {
      return;
    }

    this.rootEl = rootEl;
    this.rootEl.removeAttribute('data-kmt-header--no-js');
    this.rootEl.setAttribute('data-kmt-header--js', '');

    const store = configureStore();

    ReactDOM.render(
      <Provider store={store}>
        <HeaderContainer />
      </Provider>,
      this.rootEl);
  }

  static init (rootEl) {
    if (!rootEl) {
      rootEl = document.body;
    } else if (typeof rootEl === 'string') {
      rootEl = document.querySelector(rootEl);
    }

    if (!rootEl.hasAttribute('data-kmt-header--js')) {
      return new KmtHeader(rootEl);
    }
  }
}

export default KmtHeader;
