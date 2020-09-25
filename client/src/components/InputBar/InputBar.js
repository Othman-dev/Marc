import React, { useState } from 'react';
import './InputBar.scss';
import fire from '../../api/firebase-config'
import FileUploader from "react-firebase-file-uploader";

const InputBar = props => {

	const type = props.string.slice(0, props.string.indexOf('='))
	const content = props.string.slice(props.string.indexOf('=') + 1)
	// const link = content.replace(/\s/g, '')

	const [imagePreviewUrl, setImagePreviewUrl] = useState('');


	React.useLayoutEffect(() => {
		if (type === 'image') {
			setImagePreviewUrl(content)
		}
	})

	const includeIntoCourse = url => {
		setImagePreviewUrl(url);
		props.handleImage(props.index, url)
	}

	const imageSubmit = filename => {
		fire
			.storage()
			.ref('images')
			.child(filename)
			.getDownloadURL()
			.then(url => includeIntoCourse(url))
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
				<label
					style={{
						backgroundColor: "steelblue",
						color: "white",
						padding: 10,
						borderRadius: 4,
						cursor: "pointer"
					}}
				>

					Ajouter une image
                              <FileUploader
						hidden
						accept="image/*"
						name="image"
						storageRef={fire.storage().ref("images")}
						onUploadSuccess={imageSubmit}
					/>
				</label>

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
