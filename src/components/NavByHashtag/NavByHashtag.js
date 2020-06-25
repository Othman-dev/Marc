import React from 'react';
import './NavByHashtag.scss'
//components
import Hashtag from '../Hashtag/Hashtag'


const NavByHashtag = props => {

    const {hashtagClick} = props;

    return (
        <div className='nav-hashtag'>
            
            <Hashtag tag='HISTOIRE' hashtagClick={hashtagClick}/> 
            <Hashtag tag='GEOGRAPHIE' hashtagClick={hashtagClick} /> 
            <Hashtag tag='QCM' hashtagClick={hashtagClick} /> 
            <Hashtag tag='SIXIEME' hashtagClick={hashtagClick} /> 
            <Hashtag tag='CINQUIEME' hashtagClick={hashtagClick} /> 
            <Hashtag tag='QUATRIEME' hashtagClick={hashtagClick} /> 
            <Hashtag tag='TROISIEME' hashtagClick={hashtagClick} /> 

        </div>
    )
};

export default NavByHashtag;