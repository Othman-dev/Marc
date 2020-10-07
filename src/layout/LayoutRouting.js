import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import routes from './routes';
//components
import History_Six from '../viewsAccount/Sixieme/Sections/History'
import Qcm_Six from '../viewsAccount/Sixieme/Sections/Qcm'
import History_Five from '../viewsAccount/Cinquieme/Sections/History'
import Qcm_Five from '../viewsAccount/Cinquieme/Sections/Qcm'
import History_Four from '../viewsAccount/Quatrieme/Sections/History'
import Qcm_Four from '../viewsAccount/Quatrieme/Sections/Qcm'
import History_Three from '../viewsAccount/Troisieme/Sections/History'
import Qcm_Three from '../viewsAccount/Troisieme/Sections/Qcm'




const LayoutRouting = () => {

    const getRoutes = routes => {
        return routes.map((prop, key) => {
            if (prop.layout === "/account") {
                return (
                    <Route
                        exact
                        path={prop.layout + prop.path}
                        component={prop.component}
                        key={key}
                    />
                );
            } else {
                return null;
            }
        });
    };


    return (
        <Switch>
            <Router>
                {getRoutes(routes)}
               
                <Route path='/account/sixieme/history' component={History_Six} />
                <Route path='/account/sixieme/qcm' component={Qcm_Six} />
                <Route path='/account/cinquieme/history' component={History_Five} />
                <Route path='/account/cinquieme/qcm' component={Qcm_Five} />
                <Route path='/account/quatrieme/history' component={History_Four} />
                <Route path='/account/quatrieme/qcm' component={Qcm_Four} />
                <Route path='/account/troisieme/history' component={History_Three} />
                <Route path='/account/troisieme/qcm' component={Qcm_Three} />
			    <Redirect from='/account' to='/account/sixieme/geography' />
			</Router>

        </Switch>
    )

}

export default LayoutRouting;
