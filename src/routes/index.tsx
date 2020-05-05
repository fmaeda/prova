import { hot } from 'react-hot-loader';
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createHashHistory } from 'history';

import HomeRoute from './HomeRoute';
import ProductsRoute from './ProductsRoute';
import ProvaRoute from './ProvaRoute';
import WelcomeRoute from './WelcomeRoute';

const history = createHashHistory({ hashType: 'hashbang' });

class MainRoute extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/home" component={HomeRoute} />
          <Route path="/products" component={ProductsRoute} />
          <Route path="/prova" component={ProvaRoute} />
          <Route path="/welcome" component={WelcomeRoute} />
          <Route path="/" component={WelcomeRoute} />
        </Switch>
      </Router>
    );
  }
}

export default hot(module)(MainRoute);
