import React from 'react';
import { Switch, Route, Redirect, Link, useHistory } from 'react-router-dom'
//css
import './layout.scss'
//fire
import fire from '../api/firebase-config'
//components
import Sidebar from '../components/Sidebar/Sidebar';
//routes
import routes from './routes';


const routesBoard = [
    {
        name: 'Retour au menu',
        path: '',
        layout: '/account'
    }
]


const Account = props => {
    const hist = useHistory()


    


    // const getRoutes = routes => {
    //     return routes.map((prop, key) => {
    //         if (prop.layout === "/account") {
    //             return (
    //                 <Route

    //                     path={prop.layout + prop.path}
    //                     component={prop.component}
    //                     key={key}
    //                 />
    //             );
    //         } else {
    //             return null;
    //         }
    //     });
    // };

    const SignOutBtn = () => <button style={{ marginRight: '40px' }} onClick={() => fire.auth().signOut()}>Deconnexion</button>

    return (

        <div className='account'>



            <div className='left-side'>
                <SignOutBtn />

                {
                    hist.location.pathname === '/account/board' ?
                        <Sidebar routes={routesBoard} /> :
                        <Sidebar routes={routes} />
                }


            </div>

            <div className='right-side'>
                <div className='right-side-header'>
                    <Link to='/' target='_blank'><h1>Welcome My Friend</h1></Link>
                </div>

             


            </div>



        </div>

    )
}

export default Account;

