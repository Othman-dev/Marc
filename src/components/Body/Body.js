import React, {useContext, useState, useEffect, useCallback} from 'react';
import './Body.scss'
//components
import Card from '../Card/Card'
import {HashtagContext} from '../../assets/context/HashtagContext';
import {useCards} from '../../api/useCards';

const Body = props => {

    const { selected } = useContext(HashtagContext);

    const cards = useCards();
    
    const [data, setData] = useState([])

    const setResult = useCallback((result) => {
		    let search = cards.map(card => Object.values(card))
			search.forEach((card, index) => {
				let validation = []
				selected.forEach(tag => {
				    if(tag.indexOf('$') === 0){
						if(card.toString().toLowerCase().replace(/,/g , ' ').indexOf(tag.slice(1).toLowerCase()) >= 0)
						{validation.push(1)}
						else {validation.push(0)}
					} else {
						card.forEach((course, index) => Array.isArray(course) ? card[index]='' : course)
						if(card.toString().toLowerCase().replace(/,/g , ' ').indexOf(tag.toLowerCase()) >= 0)
							{validation.push(1)}
						else {validation.push(0)}
					}
				})
				if(validation.indexOf(0) === -1)
				{result.push(cards[index])}
			})
			return result
	},[cards, selected])

    useEffect(() => {
		if(selected.length < 1){
		    setData(cards)
		} else {
		    let result = []
			setResult(result)
		    setData(result)
		}
	}, [cards, selected, setResult])
console.log(data)
    return (
            <div className='body' >
				<div className='body-container'>
                    {data.map((card, i) => (
						card.publier ?
                        <div key={i}>
							{selected.length >=1 ?
							<Card header={card.title} body={card.trailer} hashtag={card.hashtag} id={card.id} blue/>
                            :
							<Card header={card.title} body={card.trailer} hashtag={card.hashtag} id={card.id} orange/>}
						</div>
						:
						<div key={i}/>
                    ))}
				</div>
		    </div>
    )
};

export default Body;
