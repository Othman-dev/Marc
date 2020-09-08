import React, {useState} from 'react';
import './Card.scss';
import classNames from 'classnames'
import {useHistory} from 'react-router-dom';


const Card = props => {
    const { blue, yellow, orange, card } = props;
    const [zoom, setZoom] = useState(false)
    let history = useHistory()

    const handleClick = () => {
        setZoom(true)
        setTimeout(() => history.push({pathname: `/page/${card.id}`, state:{card}}), 800)
    }

    const cardClasses = classNames({
        'card': true,
        'blue': blue,
        'orange': orange,
        'yellow': yellow,
        'zoom-in': zoom
    })
    
    return (
        <div className={cardClasses} onClick={handleClick}>
            <div className='card-header'>
                <h4>{card.course[0].slice(card.course[0].indexOf('=')+1)}</h4>
            </div>

            <div className='card-body'>
                <h4>{card.trailer} </h4>
            </div>
        </div>
    )
};

export default Card;
