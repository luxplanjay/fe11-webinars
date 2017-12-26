import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';
import { loadState, saveState } from './localStorage';
import './index.css';

const persistedState = loadState();
const store = configureStore(persistedState);

setInterval(() => {
  store.subscribe(() => {
    saveState({
      coutnerValue: store.getState().coutnerValue,
      todos: store.getState().todos
    });
  });
}, 500);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
