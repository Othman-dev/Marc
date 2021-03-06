import React, { useState } from 'react';
import './Card.scss';
import classNames from 'classnames'
import { useHistory } from 'react-router-dom';


const Card = props => {
    const { blue, yellow, orange, card, selected } = props;
    const [zoom, setZoom] = useState(false)
    let history = useHistory()

    const handleClick = () => {
        setZoom(true)
        setTimeout(() => history.push({ pathname: `/page/${card.id}`, state: { card } }), 1300)
    }

    const cardClasses = classNames({
        'card': true,
        'selected': selected,
        'blue': blue,
        'orange': orange,
        'yellow': yellow,
        'zoom-in': zoom
    })



    const stickers = hashtag => (
        <div className='sticker'>
            <h4><span>#</span>{hashtag}</h4>
        </div>
    )

    const cards = (matiere, section) => (


        <div className={cardClasses} onClick={handleClick}>
            <div className='card-header'>
                <h2>{card.course[0].slice(card.course[0].indexOf('=') + 1)}</h2>
            </div>

            <div className='card-body'>
                <h4>{card.trailer} </h4>
            </div>
            <div className='card-footer'>
                {stickers(matiere)}
                {stickers(section)}
                {
                    card.type === 'qcm' && stickers('QCM')

                }
            </div>
        </div>
    )

    return (
        <div>
            {cards(card.matiere, card.section)}
        </div>


    )
};

export default Card;
