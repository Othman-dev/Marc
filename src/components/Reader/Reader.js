import React from 'react';
import './Reader.scss';
import ReactHtmlParser from 'react-html-parser'
//api




const Reader = (props) => {

	


    const type = props.string.slice(0, props.string.indexOf('='))

	const content = props.string.slice(props.string.indexOf('=') + 1)

	const link = content.replace(/\s/g, '')


	function customDivCreator() {
		if (type === 'title') {
			return <div className='input-big-title-reader' id={content}>
				{content}</div>
		}
		else if (type === 'chapter') {
			return <div className='input-sm-title-reader' id={content}>
				{content}</div>
		}
		else if (type === 'text') {
			return <div className='input-content-reader'>
				{content}</div>
		}
		else if (type === 'question') {
			return <div className='input-question-reader'>
				{content}</div>
		}
		else if (type === 'quotes') {
			return <div className='input-quote-reader'>
				{content}</div>
		}
		else if (type === 'separation') {
			return <div className='input-separation-reader'>
				{content}</div>
		}
		else if (type === 'image') {
			return <div className='input-image-reader'>
				{content}</div>
		}
	
		else if (type === 'subchapter') {
			return <div className='input-subchapter-reader'id={content}>
				{content}</div>
		}
		else if (type === 'powerpoint') {
			const iframe = content
			return <div className='input-ppp-reader'>
			<div >{ ReactHtmlParser(iframe) }</div></div>

		
			
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


