import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'

import './layout.scss';
//components
import InputBar from '../components/InputBar/InputBar'
import Coktail from '../components/Coktail/Coktail'
import Axios from 'axios'


const Board = props => {
	const history = useHistory();
	const [data, setData] = useState({ course:[], matiere: '', section: '', publier: false, type: '', trailer: '' })

	const [course, setCourse] = useState(['title=', 'chapter=', 'subchapter=']);

	function dataChange(event) {
		if (event.target.name === 'publier') { setData({ ...data, [event.target.name]: !data.publier }) }
		else if (event.target.name === 'type') {
			if (data.type === '') { setData({ ...data, [event.target.name]: 'qcm' }) }
			else { setData({ ...data, [event.target.name]: '' }) }
		}

		else { setData({ ...data, [event.target.name]: event.target.value }) }
	}

	function handleChange(event, type, index) {
		setCourse([...course.slice(0, index),
		type + '=' + event.currentTarget.textContent,
		...course.slice(index + 1)])

		if (event.currentTarget.textContent === '') {
			setCourse([...course.slice(0, index),
			type + '=' + event.currentTarget.textContent,
			...course.slice(index + 1)])
		}
	}

	function deleteEntry(index) {
		setCourse([...course.slice(0, index),
		...course.slice(index + 1)])
	}

	function addChapter(index) {

		setCourse([...course.slice(0, index + 1),
			'chapter=',
		...course.slice(index + 1)])
	}

	function addSubchapter(index) {

		setCourse([...course.slice(0, index + 1),
			'subchapter=',
		...course.slice(index + 1)])
	}

	function addText(index) {
		setCourse([...course.slice(0, index + 1),
			'text=',
		...course.slice(index + 1)])
	}

	function addImage(index, url) {
		setCourse([...course.slice(0, index + 1),
			'image=' + url,
		...course.slice(index + 1)])
	}

	function addQuestion(index) {
		setCourse([...course.slice(0, index + 1),
			'question=',
		...course.slice(index + 1)])
	}

	function addPowerPoint(index) {
		setCourse([...course.slice(0, index + 1),
			'powerpoint=',
		...course.slice(index + 1)])
	}

	function addSeparation(index) {
		setCourse([...course.slice(0, index + 1),
			'separation=',
		...course.slice(index + 1)])
	}

	function addQuotes(index) {
		setCourse([...course.slice(0, index + 1),
			'quotes=',
		...course.slice(index + 1)])
	}

	function handleSubmit(event) {
			event.preventDefault()
		if (data.section === '' || data.matiere === '') {
			alert('You MUST pick a section and a matière')
		} else {
		    if(data._id === undefined){
					console.log('create')
				data.course = course
				Axios.post('https://radiant-shore-19271.herokuapp.com/api/cards', data)
				history.goBack();
			}else{
					console.log('update')
				data.course = course
				Axios.put(`https://radiant-shore-19271.herokuapp.com/api/cards/${data._id}`, data)
				history.goBack();
			}}
	}

	useEffect(() => {
		if (props.location.state !== undefined) {
			setData(props.location.state)
			setCourse(props.location.state.course)
		}
	}, [props.location.state])

	const boardBody = (
		course.map((string, index) => (
			<div className='hover' key={index}>
				<div className='bar'>
					<InputBar
						string={string}
						index={index}
						deleteEntry={deleteEntry}
						handleChange={handleChange}

					/>

				</div>
				<div className='bar' >
					<Coktail
						addChapter={addChapter}
						addSubchapter={addSubchapter}
						addQuotes={addQuotes}
						addImage={addImage}
						addPowerPoint={addPowerPoint}
						addSeparation={addSeparation}
						addQuestion={addQuestion}
						addText={addText}
						delete={deleteEntry}
						index={index} />
				</div>
			</div>
		))
	)

console.log(data)
console.log(course)
	return (
		<div className='board'>
			<div className='board-header'>

				<form onSubmit={handleSubmit}>
			
						<label>Publier</label>
						<input type='checkbox' name='publier' onChange={dataChange} checked={data.publier ? true : false} />
				
						<label>Qcm</label>
						<input type='checkbox' name='type' onChange={dataChange} checked={data.type === 'qcm' ? true : false} />
					

					<select name='section' onChange={dataChange} value={data.section !== '' ? data.section : undefined} required>
						<option >--choix de la section--</option>
						<option value="sixieme">Sixième</option>
						<option value="cinquieme">Cinquième</option>
						<option value="quatrieme">Quatrième</option>
						<option value="troisieme">Troisième</option>
					</select>
					<select name='matiere' onChange={dataChange} value={data.matiere !== '' ? data.matiere : undefined} required>
						<option >--choix de la matière--</option>
						<option value='geographie'>Géographie</option>
						<option value='histoire'>Histoire</option>
					</select>
					<button type='submit'>Sauvegarder</button>

				</form>
				<button onClick={() => history.goBack()}>Retour</button>
			</div>
			<textarea rows='2' placeholder='trailer' name='trailer' onChange={dataChange} defaultValue={data.trailer} />
			<div className='board-body'>
				{boardBody}
			</div>
		</div>
	)
};

export default Board;
