import React from 'react';
import './Navbar.scss';
//dep
import classNames from 'classnames'


const Navbar = props => {


    const { logoOff,logo, links, white } = props;
    return (
        <div className='nav'>
            <div className='container'>
                {
                    logoOff === true || <h4>{logo} </h4>
                }
                <h4 className={classNames({'white-color': white})}>{links} </h4>
            </div>
        </div>
    )
};

export default Navbar;
