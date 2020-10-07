import React from 'react';
import './Reader.scss';
import { Link } from 'react-router-dom'
import {useHistory} from 'react-router-dom'


const Chapter = (props) => {

    const card = props.board

    let history = useHistory()

    const type = props.string.slice(0, props.string.indexOf('='))

	const content = props.string.slice(props.string.indexOf('=') + 1)

	const link = content.replace(/\s/g, '')

    

	function customDivCreator() {
	
		if (type === 'chapter') {
			return <a className='chapter-link' href={`/page/${props.id}#${link}`}>
				<h3>{content}</h3> </a>
		}
		else if (type === 'subchapter') {
			return <a className='subchapter-link' href={`/page/${props.id}#${link}`}>
			<h4>{content}</h4> </a>
		}
		else if (type === 'title') {
			return <a className='title-link' href={`/page/${props.id}#${link}`}>
			<h3>{content}</h3> </a>
		}
    }
    const customDiv = (
		customDivCreator()
	)
    return (
		<div className='chapter-container'>
			{customDiv}
		</div>
	)
};

export default Chapter;
