import React from 'react';
import {Link} from 'react-router-dom'
//css
import './Sidebar.scss';
//routes





const Sidebar = ({routes}) => {

    return (
        <div className='sidebar'>
            <div className='links'>
                {
                    routes.map((prop, key) =>
                        prop.layout === '/account' ?
                            <Link className='link' to={prop.layout + prop.path} key={key}> <h4>{prop.name} </h4> </Link> :
                            null
                    )
                }
            </div>


        </div>
    )
};

export default Sidebar;
