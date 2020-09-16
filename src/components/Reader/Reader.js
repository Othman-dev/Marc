import React from 'react';
import './Reader.scss';
//api



const Reader = (props) => {

	


    const type = props.string.slice(0, props.string.indexOf('='))

	const content = props.string.slice(props.string.indexOf('=') + 1)

	const link = content.replace(/\s/g, '')


	function customDivCreator() {
		if (type === 'title') {
			return <div className='input-big-title' id={link}>
				{content}</div>
		}
		else if (type === 'chapter') {
			return <div className='input-sm-title' id={link}>
				{content}</div>
		}
		else if (type === 'text') {
			return <div className='input-content'>
				{content}</div>
		}
		else if (type === 'question') {
			return <div className='input-question'>
				{content}</div>
		}
		else if (type === 'quotes') {
			return <div className='input-quote'>
				{content}</div>
		}
		else if (type === 'separation') {
			return <div className='input-separation'>
				{content}</div>
		}
		else if (type === 'image') {
			return <div className='input-image'>
				{content}</div>
		}
	
		else if (type === 'subchapter') {
			return <div className='input-subchapter'id={link}>
				{content}</div>
		}
		else if (type === 'powerpoint') {
			const iframe = content;
			return <div className='input-ppp'>
			<div  dangerouslySetInnerHTML={{__html: iframe}}></div>

			</div>
			
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
