import React from 'react';
import './Header.scss'
//components
import NavByHashtag from '../NavByHashtag/NavByHashtag';
import Title from '../Title/Title';
import SearchBar from '../SearchBar/SearchBar';

const Header = props => {

    const { hashtagClick, tags } = props;

    return (
        <div className='header'>
            <Title />
            <SearchBar placeholder='Recherchez des cours ici' />
            <NavByHashtag hashtagClick={hashtagClick} tags={tags} />

        </div>
    )
};

export default Header;