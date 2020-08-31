import React from 'react';
//components
import Header from '../../../components/Header/HeaderAccount'
//routes
import routes from  '../routes'



const History = () => {

    return (
        <div className='content'>
              <Header logoOff title="Les Cours d'Histoire | Section 5ème" routes={routes} />
        </div>
    )
};

export default History;