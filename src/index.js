import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import KmtHeaderContainer from './containers/kmt-header';

const rootEl = document.getElementById('root');

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<KmtHeaderContainer />
	</Provider>,
	rootEl
);
//
// class KmtHeader {
//   constructor (options = {}) {
//     if (!options.rootEl) {
//       options.rootEl = document.body;
//     } else if (typeof options.rootEl === 'string') {
//       options.rootEl = document.querySelector(options.rootEl);
//     }
//
//     if (options.rootEl.hasAttribute('data-kmt-header--js')) {
//       return;
//     }
//
//     this.rootEl = options.rootEl;
//     this.rootEl.removeAttribute('data-kmt-header--no-js');
//     this.rootEl.setAttribute('data-kmt-header--js', '');
//
//     const store = configureStore(options.data);
//
//     ReactDOM.render(
//       <Provider store={store}>
//         <KmtHeaderContainer />
//       </Provider>,
//       this.rootEl);
//   }
//
//   static init (options = {}) {
//     if (!options.rootEl) {
//       options.rootEl = document.body;
//     } else if (typeof options.rootEl === 'string') {
//       options.rootEl = document.querySelector(options.rootEl);
//     }
//
//     if (!options.rootEl.hasAttribute('data-kmt-header--js')) {
//       return new KmtHeader(options);
//     }
//   }
// }
//
// export default KmtHeader;
