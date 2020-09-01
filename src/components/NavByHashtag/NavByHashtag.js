import React, {useContext} from 'react';
import './NavByHashtag.scss'
//components
import Hashtag from '../Hashtag/Hashtag';
import SearchBar from '../SearchBar/SearchBar'
//context
import {HashtagContext} from '../../viewsApp/App/App'





const NavByHashtag = () => {

  const {tags, hashtagClick} = useContext(HashtagContext)
    console.log(tags)
    return (
        <div className='nav-hashtag'>
            {
                tags.map((tag, i) => (
                    <div key={tag.name} >
                        <Hashtag name={tag.name} hashtagClick={hashtagClick} active={tag.active} index={i} /> 
                        
                    </div>
                   
                )
                )}
         <SearchBar placeholder='ajoute un #'/>
        </div>
    )
};

export default NavByHashtag;