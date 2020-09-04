import React, { useState } from 'react';
import './layout.scss';
//components
import InputBar from '../components/InputBar/InputBar'
import CoktailQcm from '../components/Coktail/CoktailQcm'


const Board = props => {

    const [course, setCourse] = useState(['title=TITRE DU QCM', 'chapter=test', 'subchapter=test', 'text=test']);

    const boardBody = (
        course.map((string, index) => (
		    <div key={index}>
                <div className='bar'>
				    <InputBar string={string}/>
				</div>
				<div className='bar' >
				    <CoktailQcm 
						addChapter={() => addChapter(index)}
						addSubchapter={() => addSubchapter(index)}
						addText={() => addText(index)}
						index={index}/>
				</div>
		    </div>
		))
	)

    function addChapter(index){
		setCourse([...course.slice(0, index+1),'chapter=', ...course.slice(index+1)])
	}

    function addSubchapter(index){
		setCourse([...course.slice(0, index+1),'subchapter=', ...course.slice(index+1)])
	}

    function addText(index){
		setCourse([...course.slice(0, index+1),'text=', ...course.slice(index+1)])
	}

    function addImage(index){
		setCourse([...course.slice(0, index+1),'image=', ...course.slice(index+1)])
	}

    function addQuestion(index){
		setCourse([...course.slice(0, index+1),'question=', ...course.slice(index+1)])
	}

    function addPowerPoint(index){
		setCourse([...course.slice(0, index+1),'ppp=', ...course.slice(index+1)])
	}

    function addSeparation(index){
		setCourse([...course.slice(0, index+1),'...=', ...course.slice(index+1)])
	}

    function addQuotes(index){
		setCourse([...course.slice(0, index+1),'""=', ...course.slice(index+1)])
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
