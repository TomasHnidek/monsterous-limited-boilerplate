import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Loadable from 'react-loadable';

import { defaultState } from './state/slices';
import configureStore from './state/state.store';
import DataLoader from './views';
import * as serviceWorker from './serviceWorker';

// Initialize store
const store = configureStore(defaultState);
const mountApp = document.getElementById('root');

Loadable.preloadReady().then((data) => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <DataLoader />
      </BrowserRouter>
    </Provider>,
    mountApp,
  );
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
