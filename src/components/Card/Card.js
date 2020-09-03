import React, {useState} from 'react';
import './Card.scss';
import classNames from 'classnames'
import {useHistory} from 'react-router-dom';


const Card = props => {
    const { header, body, blue, yellow, orange, tag, id } = props;
    const [zoom, setZoom] = useState(false)
    let history = useHistory()

    const handleClick = () => {
        setZoom(true)
        setTimeout(() => history.push(`/page/${id}`), 800)
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
                <h4>{header}</h4>
            </div>

            <div className='card-body'>
                <h4>{body} </h4>
                <h4 style={{ display: 'none' }} >{tag} </h4>
            </div>
        </div>
    )
};

export default Card;
