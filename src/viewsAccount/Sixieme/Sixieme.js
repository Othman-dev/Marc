import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//component
import Geography from './Sections/Geography'
import History from './Sections/History'
import Qcm from './Sections/Qcm'
import { createBrowserHistory } from "history";
//css
import './Sixieme.scss'

const hist = createBrowserHistory();



const index = () => {
    return (
      <Router history={hist}>
        <Switch >
        <Route path='/account/sixieme/geography' component={Geography}/>
        <Route path='/account/sixieme/history' component={History}/>
        <Route path='/account/sixieme/qcm' component={Qcm}/>
    
        </Switch>
      </Router>
    )
};

export default index;