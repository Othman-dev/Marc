import React, {useContext} from 'react';
import './NavByHashtag.scss'
//components
import Hashtag from '../Hashtag/Hashtag';
import SearchBar from '../SearchBar/SearchBar';
import {HashtagContext} from '../../assets/context/HashtagContext';


const NavByHashtag = () => {

  const { tags } = useContext(HashtagContext)
    return (
        <div className='nav-hashtag'>
            {
                tags.map((tag, i) => (
                    <div key={tag.name} >
                        <Hashtag name={tag.name} active={tag.active} index={i} /> 
                        
                    </div>
                   
                )
                )}
         <SearchBar plusButton placeholder='ajoute un #'/>
        </div>
    )
};

export default NavByHashtag;
