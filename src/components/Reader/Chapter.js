import React from 'react';
import './Reader.scss';
import { Link } from 'react-router-dom'
import {useHistory} from 'react-router-dom'


const Chapter = (props) => {

    const card = props.page

    let history = useHistory()

    const type = props.string.slice(0, props.string.indexOf('='))

	const content = props.string.slice(props.string.indexOf('=') + 1)

	const link = content.replace(/\s/g, '')

    const handleClick = () => {
		history.push({pathname: `/${card.id}#${link}`, state:{card}})
	}

	function customDivCreator() {
	
		if (type === 'chapter') {
			return <a href={{pathname:`/${card.id}#${link}`, state:{card}}}>
				<h3>{content}</h3> </a>
		}
		else if (type === 'subchapter') {
			return <div onClick={handleClick}>
				<h3>{content}</h3> </div>
		}
		else if (type === 'title') {
			return <Link href={{pathname:`/${card.id}#${link}`, state:{card}}}>
				<h3>{content}</h3> </Link>
		}
    }
    const customDiv = (
		customDivCreator()
	)
    return (
		<div>
			{customDiv}
		</div>
	)
};

export default Chapter;
