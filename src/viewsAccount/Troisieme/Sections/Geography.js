import React from 'react';

import { Link } from 'react-router-dom';

const Geography = () => {

    return (
        <div className='content'>
            <h2>
               Page Troisieme Geographie
            </h2>

            <Link to='/account' >Account</Link>
        </div>
    )
};

export default Geography;