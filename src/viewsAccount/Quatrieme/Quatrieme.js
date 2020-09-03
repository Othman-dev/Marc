import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//component
import Geography from './Sections/Geography'
import History from './Sections/History'
import Qcm from './Sections/Qcm'
import { createBrowserHistory } from "history";
//css
import './Quatrieme.scss'

const hist = createBrowserHistory();



const index = () => {
    return (
      <Router history={hist}>
        <Switch >
        <Route path='/admin/account/quatrieme/geography' component={Geography}/>
        <Route path='/admin/account/quatrieme/history' component={History}/>
        <Route path='/admin/account/quatrieme/qcm' component={Qcm}/>
        </Switch>
      </Router>
    )
};

export default index;