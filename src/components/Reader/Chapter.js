import React from 'react';
import './Reader.scss';
import { Link } from 'react-router-dom'


const Chapter = (props) => {


    const type = props.string.slice(0, props.string.indexOf('='))

	const content = props.string.slice(props.string.indexOf('=') + 1)

	// const link = content.replace(/\s/g, '')


	function customDivCreator() {
	
		if (type === 'chapter') {
			return <Link to={'#' + content}>
				<h3>{content}</h3> </Link>
		}
		else if (type === 'subchapter') {
			return <a href={'#' + content}>
				<h3>{content}</h3> </a>
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
