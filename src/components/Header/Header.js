import React from 'react';
import './Header.scss'
//components
import NavByHashtag from '../NavByHashtag/NavByHashtag';
import Title from '../Title/Title';
import SearchBar from '../SearchBar/SearchBar';

const Header = props => {

   
  
    return (
        <div className='header'>
            <Title />
            <SearchBar placeholder='Recherchez des cours ici' />
            <NavByHashtag  />

        </div>
    )
};

export default Header;