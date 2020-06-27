import React from 'react';
import './Card.scss';
import classNames from 'classnames'


const Card = props => {

    const {header, body, blue, yellow, orange, tag} = props;

    const cardClasses = classNames({
        'card': true,
        'blue': blue,
        'orange': orange,
        'yellow': yellow,
    })

    return (
        <div className={cardClasses}>
            <div className='card-header'>
                <h4>{header}</h4>
            </div>
            
            <div className='card-body'>
                <h4>{body} </h4>
                <h4 style={{display: 'none'}} >{tag} </h4>
            </div>
        </div>
    )
};

export default Card;