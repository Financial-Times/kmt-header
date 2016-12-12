import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preloadedState) {
  const args = [thunk];

  return createStore(
    reducers,
    preloadedState,
    composeEnhancers(applyMiddleware(...args))
  );
}
