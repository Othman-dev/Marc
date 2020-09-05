import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//css
import './index.scss';
//views
import App from './viewsApp/App/App';
import Page from './viewsApp/Page/Page';
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


ReactDOM.render(

  <React.StrictMode>
    <AuthContextProvider>
      <Router>
        <Switch >
          <Route path='/' exact component={App} />
          <Route path='/page/:id' component={Page} />
          <Route path='/login' component={Login} />
          <Route path='/about' component={About} />
          <PrivateRoute path='/account' component={AccountLayout} />

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
