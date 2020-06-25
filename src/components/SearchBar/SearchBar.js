import React from 'react';
import './SearchBar.scss'

const SearchBar = props => {

    return (
        <input className='search-bar' placeholder={props.placeholder}/>

    )
};

export default SearchBar;