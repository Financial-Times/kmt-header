import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <header className='o-header-services' data-o-component='o-header'>
      <div className='o-header-services__top o-header-services__container'>
        <div className='o-header-services__ftlogo'></div>
        <div className='o-header-services__title'>
          <h1 className='o-header-services__product-name'>Tool or Service name</h1>
          <span className='o-header-subrand__product-tagline '>Tagline to explain the product here</span>
        </div>
      </div>
    </header>
  </Provider>,
  document.getElementById('root'));
