import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/App';
import GalleryContainer from './components/GalleryContainer'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<GalleryContainer />, document.getElementById('root'));
registerServiceWorker();
