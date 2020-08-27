import React from 'react';
import './Navbar.scss';


const Navbar = props => {


    const { logo, links } = props


    return (
        <div className='nav'>
            <div className='container'>
                <h4>{logo} </h4>
                <h4>{links} </h4>
            </div>
        </div>
    )
};

export default Navbar;
