import React from 'react';
import './Navbar.scss';
//dep
import propTypes from 'prop-types';
import classNames from 'classnames'


const Navbar = props => {


    const { logo, links, white } = props

    const containerClasses = classNames({
        'container': true,
        'white-color': white
    })

    return (
        <div className='nav'>
            <div className={containerClasses}>
                <h4>{logo} </h4>
                <h4>{links} </h4>
            </div>
        </div>
    )
};

export default Navbar;
