import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history';
//component
import Account from './Account'
import Sixieme from '../../views/Sixieme/Sixieme'

const hist = createBrowserHistory();

const index = () => {
    return (
        <Router history={hist}>
        <Switch >
          <Route path='/account' component={props =><Account {...props} />} />
          <Route path='/account/sixieme' component={props => <Sixieme {...props} />} />
        </Switch>
      </Router>
    )
};

export default index;