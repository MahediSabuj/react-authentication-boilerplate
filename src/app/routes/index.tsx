import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import App from '../app';
import { Registration, Login } from '../components/account';

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact={true} path='/' component={App} />
          <Route exact={true} path='/Registration' component={Registration} />
          <Route exact={true} path='/Login' component={Login} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
