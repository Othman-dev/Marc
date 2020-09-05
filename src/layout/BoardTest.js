import React, { useState } from 'react';
import './layout.scss';
//components
import InputBar from '../components/InputBar/InputBar'
import CoktailQcm from '../components/Coktail/CoktailTest'


const Board = props => {

	const [course, setCourse] = useState(['title=TITRE DU QCM']);

	const deleteBtn = index => {
		setCourse([
			...course.slice(0, index),
			...course.slice(index + 1)

		])
	}

	


	const boardBody = (
		course.map((string, index) => (
			<div className='hover' key={index}>
				<div className='bar'>
					<InputBar string={string} deleteBtn={() => deleteBtn(index)} />
				
						<div className='bar' >

							<CoktailQcm
								addTitle={() => addTitle(index)}
								addChapter={() => addChapter(index)}
								addSubchapter={() => addSubchapter(index)}
								addText={() => addText(index)}
								addSeparation={() => addSeparation(index)}
								addImage={() => addImage(index)}
								addPpp={() => addPpp(index)}
								addQuestion={() => addQuestion(index)}
								addQuote={() => addQuote(index)}
								delete={() => deleteBtn(index)}
								index={index} />
						</div>
					</div>
			

			</div>
		))
	)

	function addTitle(index) {
		setCourse([...course.slice(0, index + 1), 'title=', ...course.slice(index + 1)])
	}

	function addChapter(index) {
		setCourse([...course.slice(0, index + 1), 'chapter=', ...course.slice(index + 1)])
	}

	function addSubchapter(index) {
		setCourse([...course.slice(0, index + 1), 'subchapter=', ...course.slice(index + 1)])
	}

	function addText(index) {
		setCourse([...course.slice(0, index + 1), 'text=', ...course.slice(index + 1)])
	}

	function addImage(index) {
		setCourse([...course.slice(0, index + 1), 'image=', ...course.slice(index + 1)])
	}

	function addQuestion(index) {
		setCourse([...course.slice(0, index + 1), 'question=', ...course.slice(index + 1)])
	}

	function addPpp(index) {
		setCourse([...course.slice(0, index + 1), 'ppp=', ...course.slice(index + 1)])
	}

	function addSeparation(index) {
		setCourse([...course.slice(0, index + 1), 'separation=', ...course.slice(index + 1)])
	}

	function addQuote(index) {
		setCourse([...course.slice(0, index + 1), 'quote=', ...course.slice(index + 1)])
	}

	return (
		<div className='board'>
			<div className='board-header'>
				<button>Publier le QCM</button>
				<button>Ajouter aux Brouillon</button>
			</div>
			<div className='board-body'>
				{boardBody}
			</div>


		</div>
	)
};

export default Board;
