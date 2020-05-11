import { hot } from 'react-hot-loader';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ProvaPage from './ProvaPage';
import WelcomePage from './WelcomePage';

class MainRoute extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/prova" component={ProvaPage} />
        <Route path="/welcome" component={WelcomePage} />
        <Route path="/" component={ProvaPage} />
      </Switch>
    );
  }
}

export default hot(module)(MainRoute);
