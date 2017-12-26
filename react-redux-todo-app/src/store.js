import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import reducers from './reducers';

const middleware = [logger];

const enchancer = composeWithDevTools(applyMiddleware(...middleware));

export default function configureStore(persistedState = {}) {
  return createStore(reducers, persistedState, enchancer);
}
