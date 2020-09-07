import React, {useState} from 'react';
import './InputBar.scss'

const InputBar = props => {


	const type = props.string.slice(0, props.string.indexOf('='))

	const content = props.string.slice(props.string.indexOf('=') + 1)
	const [imagePreviewUrl, setImagePreviewUrl] = useState('')
	
	const imageChange = e => {
		setImagePreviewUrl(URL.createObjectURL(e.target.files[0]))
	}

	console.log(imagePreviewUrl)

	function inputDivCreator() {
		if (type === 'title') {
			return <div
				contentEditable
				suppressContentEditableWarning
				data-text='TITRE DU COURS/QCM'
				className='input-big-title'
				onBlur={(event) => props.handleChange(event, type, props.index)}>
				{content}</div>
		}
		else if (type === 'chapter') {
			return <div
				contentEditable
				suppressContentEditableWarning
				data-text='Nom du chapitre'
				className='input-sm-title'
				
				onBlur={(event) => props.handleChange(event, type, props.index)}>
				 {content}</div>
		}
		else if (type === 'subchapter') {
			return <div
				contentEditable
				suppressContentEditableWarning
				data-text='Nom du sous-chapitre'
				className='input-subchapter'
				onBlur={(event) => props.handleChange(event, type, props.index)}>
				
				 {content}</div>
		}
		else if (type === 'text') {
			return <div
				contentEditable
				suppressContentEditableWarning
				data-text='Texte'
				className='input-content'
				onBlur={(event) => props.handleChange(event, type, props.index)}>
				{content}</div>
		}
		else if (type === 'question') {
			return <div
				contentEditable
				suppressContentEditableWarning
				data-text='Nouvelle Question'
				className='input-question'>
				{content}</div>
		}
		else if (type === '""') {
			return <div
				contentEditable
				suppressContentEditableWarning
				data-text='Citation'
				className='input-quote'>
				{content}</div>
		}
		else if (type === '...') {
			return <div

				className='input-separation'>
				* * * </div>
		}
		else if (type === 'image') {
			return <div
				
				className='input-image'>
				<input type='file' onChange={e => imageChange(e)}/>
				<img src={imagePreviewUrl}/>
				 </div>
		}
		else if (type === 'ppp') {
			return <div
				contentEditable
				suppressContentEditableWarning
				data-text='Inserer un <iframe>'
				className='input-ppp'>
				{content}</div>
		}
		
	
}

const inputDiv = (
	inputDivCreator()
)


	
	

return (
	<div className='input-bar' >
		{inputDiv}

	</div>
)
}

export default InputBar;
