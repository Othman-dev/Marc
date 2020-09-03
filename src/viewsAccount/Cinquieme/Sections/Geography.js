import React, {useState} from 'react';
//routes
import routes from  '../routes'
//components
import Header from '../../../components/Header/HeaderAccount'






const Geography = ({history}) => {

 
    const handleChange = e => {
        e.preventDefault();
    }

    const handleClick =()=> {
        
    }

    return (
        <div className='content'>
           <Header logoOff title='Les Cours de Geographie | Section 5ème' routes={routes} handleChange={handleChange} buttonOnClick={handleClick} />
           {/* <Body cards={getCards} selected={[]} data={[]}/> */}
        </div>
    )
};

export default Geography;