import React from 'react';
import './Hashtag.scss'
import classNames from 'classnames';

const Hashtag = (props) => {


    const { name, hashtagClick, active } = props;
    console.log(active)

    const handleClick = () => {
        hashtagClick(name, active)
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

