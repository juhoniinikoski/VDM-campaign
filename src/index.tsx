import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './styles/styles.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
