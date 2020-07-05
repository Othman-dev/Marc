import React from 'react';
import './Hashtag.scss'
import classNames from 'classnames';
//hooks

const Hashtag = (props) => {


    const { name, hashtagClick, active, index } = props;


    const handleClick = () => {

        hashtagClick(name, index, active)

    }

    const hashtagClasses = classNames({
        'hashtag': true,
        'active-hashtag': active,
    })


    return (
        <div className={hashtagClasses} onClick={handleClick} >
            <h4>#{name} </h4>

        </div>
    )
};

export default Hashtag;

