import React from 'react';
import './Navbar.scss';
import classNames from 'classnames';



const Navbar = props => {

    const linksColor = classNames({
        'white-links': props.whiteLinks,
        'dark-links': props.darkLinks
    })

    const { logoOff,logo, links } = props;
    return (
        <div className='nav'>
            <div className='container'>
                {
                    logoOff === true || <h4 >{logo} </h4>
                }
                <h4 className={linksColor}>{links} </h4>
            </div>
        </div>
    )
};

export default Navbar;
