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
				let temp = card.map((item, index) => Array.isArray(item) ? '' : item)
				let validation = []
				selected.forEach(tag => {
				    if(tag.indexOf('$') === 0){
						if(card.toString().toLowerCase().replace(/,/g , ' ').indexOf(tag.slice(1).toLowerCase()) >= 0)
						{validation.push(1)}
						else {validation.push(0)}
					} else {
						if(temp.toString().toLowerCase().replace(/,/g , ' ').indexOf(tag.toLowerCase()) >= 0)
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
					{
						data.length !== 0 ?
					
					data.map((card, i) => (
						card.publier ?
                        <div key={i}>
							{selected.length >=1 ?
							
							<Card selected card={card}/>
                            :
							<Card card={card}/>}
						</div> : null
						
						
                    )) : <div className='oups' >
						<i class="far fa-laugh-beam"></i>
					<h1>... Oups, il semble qu'il n'y ai pas de cours corespondant à ta recherche ...</h1> <br/>
					<h3>Vérifie les hashtags sélectionnés. Petit conseil, si tu fais ta recherche avec un hashtag personnalisé, essaye de rajouter les accents! ;)</h3>
							</div> }
				</div>
		    </div>
    )
};

export default Body;
