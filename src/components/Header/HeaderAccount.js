import React from 'react';
import { Link } from 'react-router-dom';
//components
import Navbar from '../Navbar/Navbar'
import './Header.scss'
//proptypes
import PropTypes from 'prop-types';
//import SearchBar from '../SearchBar/SearchBar';

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
            <Navbar logoOff={props.logoOff} logo={props.logo} links={getLinks(props.routes)} />
            {   props.qcm === false ? 
                <div className='app-bar'>

                  
					{/*<SearchBar placeholder='chercher un cour...'/>*/}
                </div> 
                :
                <div className='app-bar'>

                    <button onClick={props.addQcm} >Ajouter un QCM</button>
					{/*<SearchBar handleChange={props.handleChange} placeholder='chercher un QCM...'/>*/}

                </div> 
            }

        </div>
    )
};

export default HeaderAccount;

HeaderAccount.defaultProps = {
    qcm: false,
}

HeaderAccount.propTypes = {
    qcm: PropTypes.bool
}
