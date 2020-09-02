import React, {useContext, useState, useEffect, useLayoutEffect} from 'react';
import './Body.scss'
//components
import Card from '../Card/Card'
import {HashtagContext} from '../../assets/context/HashtagContext';
import {useCards} from '../../api/useCards';

const Body = props => {

    const { selected } = useContext(HashtagContext);

    const cards = useCards();
    
    const [data, setData] = useState([])

    function setResult (result) {
		    let search = cards.map(card => Object.values(card))
			search.forEach((card, index) => {
				let temp = []
				selected.forEach(tag => {
						if(card.toString().toLowerCase().replace(/,/g , ' ').indexOf(tag.toLowerCase()) >= 0)
						{temp.push(1)}
						else {temp.push(0)}
				})
				if(temp.indexOf(0) === -1)
				{result.push(cards[index])}
			})
			return result
	}

    useEffect(() => {
		if(selected.length < 1){
		    setData(cards)
		} else {
		    let result = []
			setResult(result)
		    setData(result)
		}
	}, [cards, selected])

    return (
            <div className='body' >
				<div className='body-container'>
                    {data.map((card, i) => (
                        <div key={i}>
                            <Card header={card.title} body={card.trailer} hashtag={card.hashtag} id={card.id}/>
						</div>
                    ))}
				</div>
		    </div>
    )
};

export default Body;
