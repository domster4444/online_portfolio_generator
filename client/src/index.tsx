import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './main/store/store';
import './library/utilities/i18next';

import App from './App';

import './scss/main.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={<div>Loading</div>}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Suspense>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
