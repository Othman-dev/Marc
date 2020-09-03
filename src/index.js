import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history';
//css
import './index.scss';
//views
import App from './viewsApp/App/App';
import Page from './viewsApp/Page/PageTest';
import Login from './viewsApp/Login/Login'
import About from './viewsApp/About/About';
//layout
import AccountLayout from './layout/Account';
//Private Route
import PrivateRoute from './api/PrivateRoute'
//context
import { AuthContextProvider } from './assets/context/AuthContext';
//
import * as serviceWorker from './serviceWorker';

import Board from './layout/Board'

var hist = createBrowserHistory();

ReactDOM.render(

  <React.StrictMode>
    <AuthContextProvider>
      <Router history={hist}>
        <Switch >
          <Route path='/' exact component={props => <App {...props} />} />
          <Route path='/page/:id' component={props => <Page {...props} blue />} />
          <Route path='/login' component={props => <Login {...props} />} />
          <Route path='/about' component={props => <About {...props} />} />
          <PrivateRoute path='/account' component={props => <AccountLayout {...props} />} />
        </Switch>
      </Router>
    </AuthContextProvider>
  </React.StrictMode>
  // <Board />
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
