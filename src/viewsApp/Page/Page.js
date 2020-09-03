import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import './Page.scss';
import classNames from 'classnames';
//api
import {useCards} from '../../api/useCards';

const Page = props => {
    const cards = useCards();
    
    const [card, setCard] = useState({})

    useEffect(() => { 
		setCard(cards.filter(item => item.id === props.match.params.id).pop());
	}, [props.match.params.id, cards])

		console.log(card)
    const pageClasses = classNames({
        'page': true,
        'blue': true
    })

    return (
        <div className={pageClasses}>
            <Link to='/'> <i className="fas fa-times"></i> </Link>
        </div>
    )
};

export default Page;


