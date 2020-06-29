import React from 'react';
import './Body.scss'
//components
import Card from '../Card/Card'


const Body = props => {

    const { data } = props;
    return (
        <div className='body' >
            <div className='body-container'>
                {data.map(card =>
                    <div key={card.id}>
                    <Card header={card.title} body={card.trailer} hashtag={card.hashtag} blue/>
                    </div>
                )}

            </div>
        </div>
    )
};

export default Body;