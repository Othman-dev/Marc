import React from 'react';
import './NavByHashtag.scss'
//components
import Hashtag from '../Hashtag/Hashtag'


const NavByHashtag = props => {

    const { hashtagClick, tags } = props;
    return (
        <div className='nav-hashtag'>

            {
                tags.map(tag => (
                    <div key={tag.name} >
                        <Hashtag hashtagClick={hashtagClick} name={tag.name} active={tag.active} /> 
                    </div>
                )
                )}


        </div>
    )
};

export default NavByHashtag;