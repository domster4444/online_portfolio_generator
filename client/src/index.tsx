import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import './library/utilities/i18next';

ReactDOM.render(
  <BrowserRouter>
    <Suspense fallback={<div>Loading</div>}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Suspense>
  </BrowserRouter>,

  document.getElementById('root')
);
