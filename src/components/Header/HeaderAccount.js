import React from 'react';
import { Link } from 'react-router-dom';
//components
import Navbar from '../Navbar/Navbar'
import './Header.scss'

const getLinks = routes => {
    return (
        routes.map((prop, key) => 
            <Link to={prop.path} key={key} >{prop.name} </Link>
        )
    )
}

const HeaderAccount = props => {

    
    return (
        <div className='header-account'>
              <h2>
               {props.title}
            </h2>
            <Navbar logoOff={props.logoOff} logo={props.logo} links={getLinks(props.routes)}/>
        </div>
    )
};

export default HeaderAccount;