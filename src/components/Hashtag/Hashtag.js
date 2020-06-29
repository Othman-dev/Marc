import React, { useState, memo } from 'react';
import './Hashtag.scss'
import classNames from 'classnames';

const Hashtag = (props) => {


    const { name, hashtagClick, active } = props;


    const hashtagClasses = classNames({
        'hashtag': true,
        'active-hashtag': active,
    })
    return (
        <div className={hashtagClasses} onClick={() => hashtagClick(name, active)
        } >
            <h4>#{name} </h4>

        </div>
    )
};

export default memo(Hashtag);

