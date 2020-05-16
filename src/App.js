import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Route, Switch, NavLink } from 'react-router-dom';

import './App.css';

const AsyncPageDefault = Loadable({
  loader: () => import(/* webpackChunkName: "pageDefault" */ './PageDefault'),
  loading: () => <div>loading page...</div>,
  modules: ['pageDefault'],
});

const AsyncPageAnother = Loadable({
  loader: () => import(/* webpackChunkName: "pageAnother" */ './PageAnother'),
  loading: () => <div>loading another page...</div>,
  modules: ['pageAnother'],
});

class App extends Component {
  /// here i can do localstorage stuff
  render() {
    return (
      <div className="App">
        <p>
          {this.props.data &&
            this.props.data.hits.length > 0 &&
            this.props.data.hits.map((hit) => <div>{hit.title}</div>)}
        </p>

        <hr />

        <h2>Part 3: React router</h2>
        <nav>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/another" activeClassName="active">
            Another page
          </NavLink>
        </nav>
        <Switch>
          <Route path="/" exact component={AsyncPageDefault} />
          <Route path="/another" component={AsyncPageAnother} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(
  connect(({ app }) => ({
    data: app.newsData,
  }))(App)
);
