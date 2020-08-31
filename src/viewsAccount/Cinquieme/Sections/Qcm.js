import React from 'react';
//components
import Header from '../../../components/Header/HeaderAccount'
//routes
import routes from  '../routes'



const Qcm = () => {

    return (
        <div className='content'>
            <Header logoOff title='Les QCM | Section 5ème' routes={routes} />

            
        </div>
    )
};

export default Qcm;