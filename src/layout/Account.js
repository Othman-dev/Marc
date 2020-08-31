import React from 'react';
import { Switch, Route,Redirect } from 'react-router-dom'
//css
import './Account.scss'
//fire
import fire from '../api/firebase-config'
//components
import Sidebar from '../components/Sidebar/Sidebar';
//routes
import routes from './routes';




const Account = props => {

    const getRoutes = routes => {
        return routes.map((prop, key) => {
            if (prop.layout === "/account") {
                return (
                    <Route
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

    const SignOutBtn = () => <button style={{ marginRight: '40px' }} onClick={() => fire.auth().signOut()}>Deconnexion</button>

    return (
        <div className='account'>

            <div className='left-side'>
            <SignOutBtn />
                <Sidebar routes={routes} />
            </div>
            <div className='right-side'>
                <div className='right-side-header'>
                    <h1>Welcome My Friend</h1>
                </div>

                <Switch>
                    {getRoutes(routes)}
                    <Redirect from='/account' to='/account/sixieme/geography' />
                </Switch>
            </div>

        </div>
    )
}

export default Account;


