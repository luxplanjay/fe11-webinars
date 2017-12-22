import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const Root = () => (
  <BrowserRouter basename="/fe11-webinars/webinar-22-12-react-6/build">
    <App />
  </BrowserRouter>
);

export default Root;
