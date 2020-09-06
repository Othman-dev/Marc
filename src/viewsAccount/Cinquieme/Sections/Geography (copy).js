import React, {useState, useContext} from 'react';
//routes
import routes from  '../routes'
//components
import Header from '../../../components/Header/HeaderAccount'
import Board from '../../../layout/BoardTest'
import { Link } from 'react-router-dom';




const Geography = (props) => {

 
    const handleChange = e => {
        e.preventDefault();
    }

   

    return (

        <div className='content'>
           <Header logoOff title='Les Cours de Geographie | Section 5ème' routes={routes} handleChange={handleChange}/>
           {/* <Body cards={getCards} selected={[]} data={[]}/> */}
           <Link to='/account/board' >Ajouter un Cour</Link>
        
        </div>
    )
};

export default Geography;