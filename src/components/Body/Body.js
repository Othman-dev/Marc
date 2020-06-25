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

                    <Card key={card.id} header={card.title} body={card.trailer} hashtag={card.hashtag} orange/>
                )}

            </div>
        </div>
    )
};

export default Body;