import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history';
//css
import './index.scss';
//components
import App from './views/App/App';
import Page from './views/Page/PageTest';
import Login from './views/Login/Login'
import Account from './views/Account/index';
import About from './views/About/About';
import PrivateRoute from './api/PrivateRoute'
//context
import {AuthContextProvider} from './context/AuthContext.js';
import * as serviceWorker from './serviceWorker';

var hist = createBrowserHistory();

ReactDOM.render(

    <React.StrictMode>
       <AuthContextProvider>
      <Router history={hist}>
        <Switch >
          <Route path='/' exact component={props => <App {...props} />} />
          <Route path='/page/:id' component={props => <Page {...props} blue />} />
          <Route path='/login' component={props => <Login {...props} />} />
		  <Route path='/about' component={props => <About {...props} />}/>
          <PrivateRoute path='/account' component={props => <Account {...props} />} />
          < Redirect from='/' to='/' />
        </Switch>
      </Router>
      </AuthContextProvider>
    </React.StrictMode>
 
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
