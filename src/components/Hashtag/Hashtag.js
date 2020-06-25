import React, { useState } from 'react';
import './Hashtag.scss'
import classNames from 'classnames';

const Hastag = props => {

    const [active, setActive] = useState(false)

    const { tag, hashtagClick } = props;

    const handleClick = () => {
        setActive(!active);
        hashtagClick(tag, !active);
    }

    const hashtagClasses = classNames({
        'hashtag': true,
        'active-hashtag': active,
    })

    return (
        <div className={hashtagClasses} onClick={handleClick} >
            <h4>#{tag} </h4>

        </div>
    )
};

export default Hastag;