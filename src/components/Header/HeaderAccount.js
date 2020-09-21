import React from 'react';

//components
import Navbar from '../Navbar/Navbar'
import './Header.scss'
//proptypes
import PropTypes from 'prop-types';







const HeaderAccount = props => {


    

    console.log(props.active)

    return (
        <div className='header-account'>
            <h2>
                {props.title}
            </h2>
            <Navbar logoOff={props.logoOff} logo={props.logo} links={props.links} />
         

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
