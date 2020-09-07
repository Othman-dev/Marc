import React, {useState, useEffect, useCallback} from 'react';
//routes
import routes from  '../routes'
//components
import Header from '../../../components/Header/HeaderAccount'
import {useCards} from '../../../api/useCards'
import {Link} from 'react-router-dom'


const Geography = (props) => {

    const cards =useCards()

    const [data, setData] = useState([])
 
    const handleChange = e => {
        e.preventDefault();
    }

    const setResult = useCallback((result) => {
		let search = cards.map(card => Object.values(card))
		search.forEach((card, index) => {
		    let validation = []
		    card.forEach((course, index) => Array.isArray(course) 
				? card[index]='' : course)
		    if((card.toString().toLowerCase().replace(/,/g , ' ').indexOf('geographie') >= 0)
		    && (card.toString().toLowerCase().replace(/,/g , ' ').indexOf('cinquieme') >= 0)
		    && (card.toString().toLowerCase().replace(/,/g , ' ').indexOf('qcm') < 0))
			
				{validation.push(1)}
			else {validation.push(0)}
		
		    if(validation.indexOf(0) === -1)
				{result.push(cards[index])}
		})
		return result
}, [cards])

  useEffect(() => {
		let result = []
		setResult(result)
		setData(result)
	}, [cards, setResult])
    return (

        <div className='content'>
            <Header logoOff title='Les Cours de Geographie | Section 5ème' routes={routes} handleChange={handleChange}/>
		    <div><ul>
			    {
					data.map((item, index) =>
						<li key={index}>
							<Link className='link' to={{ pathname:'/account/board', state:item}}>
							{item.course[0].slice(item.course[0].indexOf('=')+1)} 
							</Link>
						</li>
					) 
			    }
			</ul></div>
        </div>
    )
};

export default Geography;
