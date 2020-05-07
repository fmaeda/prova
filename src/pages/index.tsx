import { hot } from 'react-hot-loader';
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createHashHistory } from 'history';

import ProvaPage from './ProvaPage';
import WelcomePage from './WelcomePage';

const history = createHashHistory({ hashType: 'hashbang' });

class MainRoute extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/prova" component={ProvaPage} />
          <Route path="/welcome" component={WelcomePage} />
          <Route path="/" component={WelcomePage} />
        </Switch>
      </Router>
    );
  }
}

export default hot(module)(MainRoute);
