import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';

const AsyncApp = Loadable({
  loader: () => import(/* webpackChunkName: "app" */ './App'),
  loading: () => <div>loading...</div>,
  modules: ['app'],
});

class ServerApp extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={AsyncApp} />
        <Route path="/:id" component={AsyncApp} />
      </Switch>
    );
  }
}

export default ServerApp;
