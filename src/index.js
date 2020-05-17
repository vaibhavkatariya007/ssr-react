import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Frontload } from 'react-frontload';

import ServerApp from './ServerApp';
import configureStore from './store/configureStore';
//import registerServiceWorker from './registerServiceWorker';

import './index.css';
import 'antd/dist/antd.css';

const store = configureStore(window.__REDUX_STATE__ || {});

const AppBundle = (
  <ReduxProvider store={store}>
    <BrowserRouter>
      <Frontload noServerRender={true}>
        <ServerApp />
      </Frontload>
    </BrowserRouter>
  </ReduxProvider>
);

window.onload = () => {
  Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(AppBundle, document.getElementById('root'));
  });
};

// registerServiceWorker();
