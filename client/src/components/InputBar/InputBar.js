import React, { useState } from 'react';
import './InputBar.scss';
import fire from '../../api/firebase-config'

const InputBar = props => {

	const type = props.string.slice(0, props.string.indexOf('='))
	const content = props.string.slice(props.string.indexOf('=') + 1)
	// const link = content.replace(/\s/g, '')
	const [imagePreviewUrl, setImagePreviewUrl] = useState('')
	const imageChange = e => {
		setImagePreviewUrl(URL.createObjectURL(e.target.files[0]))
	}

	const imageSubmit = () => {
		fire
      .storage()
      .ref("images")
      .child()
      .getDownloadURL()
	  .then(url => setImagePreviewUrl(url));
		props.addImage(props.index, imagePreviewUrl)
	}

	// console.log(link)
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
				id={content}
				onBlur={(event) => props.handleChange(event, type, props.index)}>
				{content}</div>
		}
		else if (type === 'subchapter') {
			return <div
				contentEditable
				suppressContentEditableWarning
				data-text='Nom du sous-chapitre'
				className='input-subchapter'
				id={content}
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
				onBlur={(event) => props.handleChange(event, type, props.index)}
				className='input-question'>
				{content}</div>
		}
		else if (type === 'quotes') {
			return <div
				contentEditable
				suppressContentEditableWarning
				data-text='Citation'
				onBlur={(event) => props.handleChange(event, type, props.index)}
				className='input-quote'>
				{content}</div>
		}
		else if (type === 'separation') {
			return <div

				className='input-separation'>
				* * * </div>
		}
		else if (type === 'image') {
			return <div

				className='input-image'>
				<form onSubmit={imageSubmit}>
					<input type='file' onChange={e => imageChange(e)} />
					{
						imagePreviewUrl !== '' && <button type='submit'>Valider l'Image</button>
					}
					
				</form>

				<img src={imagePreviewUrl} alt="cours d'histoire et de geographie" />
			</div>
		}
		else if (type === 'powerpoint') {
			return <div
				contentEditable
				suppressContentEditableWarning
				data-text='Inserer un <iframe>'
				onBlur={(event) => props.handleChange(event, type, props.index)}
				className='input-ppp'>
				{content}
			</div>
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
