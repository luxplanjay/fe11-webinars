import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';

const root = document.querySelector('#root');

ReactDOM.render(<App />, root);

registerServiceWorker();
