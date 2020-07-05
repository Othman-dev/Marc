import React from 'react';
import './Body.scss'
//components
import Card from '../Card/Card'


const Body = props => {

    const { data, selected, cards } = props;

    return (
        <div>

            {
                selected.length !==  0 ?
                    <div className='body' >
                        <div className='body-container'>
                            {data.map((card, i) => (
                                <div key={card.id}>
                                    <Card header={card.title} body={card.trailer} hashtag={card.hashtag} id={card.id} blue />
                                </div>
                            ))
                            }

                        </div>
                    </div>
                    :
                    <div className='body' >
                        <div className='body-container'>
                            {cards.map((card, i) => (
                                <div key={card.id}>
                                    <Card header={card.title} body={card.trailer} hashtag={card.hashtag} id={card.id} blue />
                                </div>
                            ))
                            }

                        </div>
                    </div>

            }
        </div>

    )
};

export default Body;