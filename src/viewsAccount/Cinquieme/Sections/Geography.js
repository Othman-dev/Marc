import React from 'react';
//routes
import routes from  '../routes'
//components
import Header from '../../../components/Header/HeaderAccount'




const Geography = () => {

    return (
        <div className='content'>
           <Header logoOff title='Les Cours de Geographie | Section 5ème' routes={routes} />
        </div>
    )
};

export default Geography;