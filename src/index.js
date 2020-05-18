import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import ServerApp from './ServerApp';
import configureStore from './store/configureStore';
//import registerServiceWorker from './registerServiceWorker';

import './index.css';
const store = configureStore(window.__REDUX_STATE__ || {});

const AppBundle = (
  <ReduxProvider store={store}>
    <BrowserRouter>
      <ServerApp />
    </BrowserRouter>
  </ReduxProvider>
);

window.onload = () => {
  Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(AppBundle, document.getElementById('root'));
  });
};

// registerServiceWorker();
