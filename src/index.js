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
