import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history';
//css
import './index.scss';
//components
import App from './views/App/App';
import Page from './views/Page/Page';
//
import * as serviceWorker from './serviceWorker';

const hist = createBrowserHistory();

console.log(hist);
ReactDOM.render(
  <React.StrictMode>
    <Router history={hist}>
      <Switch >

        <Route path='/' component={App} />
        <Route path='/page' component={Page} />

      </Switch>

    </Router>
  </React.StrictMode>

  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
