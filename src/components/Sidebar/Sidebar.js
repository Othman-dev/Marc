import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
//css
import './Sidebar.scss';
//routes
import routes from '../../views/Account/routes';


const Sidebar = props => {


    return (
        <div className='sidebar'>
            <Switch>
                {routes.map((prop, key) => {

                    return (
                        <Route path={prop.path} component={prop.component} key={key}>
                            <h4>
                                {prop.name}
                            </h4>
                        </Route>
                    )
                })}
            </Switch>

        </div>
    )
};

export default Sidebar;