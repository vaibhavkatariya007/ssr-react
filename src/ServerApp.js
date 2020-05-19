import React from 'react';
// import { Spin } from 'antd';
// import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';
import App from './App';
// const AsyncApp = Loadable({
//   loader: () => import(/* webpackChunkName: "app" */ './App'),
//   loading: () => (
//     <center>
//       <div className="app">
//         <Spin tip="Loading..." />
//       </div>
//     </center>
//   ),
//   modules: ['app'],
// });

const ServerApp = () => (
  <Switch>
    <Route path="/" exact component={App} />
    <Route path="/:id" component={App} />
  </Switch>
);

export default ServerApp;
