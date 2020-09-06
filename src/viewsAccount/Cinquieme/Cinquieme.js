import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//component
import Geography from './Sections/Geography'
import History from './Sections/History'
import Qcm from './Sections/Qcm'
import Board from '../../layout/Board'

//history
import { createBrowserHistory } from "history";
//css
import './Cinquieme.scss'

const hist = createBrowserHistory();



const index = () => {
    return (
      <Router history={hist}>
        <Switch >
        <Route path='/account/cinquieme/geography' component={Geography}/>
        <Route path='/account/cinquieme/history' component={History}/>
        <Route path='/account/cinquieme/qcm' component={Qcm}/>
        <Route path="/account/board" component={Board} />
        </Switch>
      </Router>
    )
};

export default index;
