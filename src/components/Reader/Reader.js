import React from 'react';
import './Reader.scss';
import classNames from 'classnames';
//api

const Reader = (props) => {


    const type = props.string.slice(0, props.string.indexOf('='))

	const content = props.string.slice(props.string.indexOf('=') + 1)

	function customDivCreator() {
		if (type === 'title') {
			return <div id={content}>
				{content}</div>
		}
		else if (type === 'chapter') {
			return <div id={content}>
				{content}</div>
		}
		else if (type === 'text') {
			return <div>
				{content}</div>
		}
		else if (type === 'question') {
			return <div>
				{content}</div>
		}
		else if (type === 'quotes') {
			return <div>
				{content}</div>
		}
		else if (type === 'separation') {
			return <div>
				{content}</div>
		}
		else if (type === 'image') {
			return <div>
				{content}</div>
		}
		else if (type === 'content') {
			return <div>
				{content}</div>
		}
		else if (type === 'subchapter') {
			return <div id={content}>
				{content}</div>
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

export default Reader;
