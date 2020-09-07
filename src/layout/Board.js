import React, { useState } from 'react';
import './layout.scss';
//components
import InputBar from '../components/InputBar/InputBar'
import Coktail from '../components/Coktail/Coktail'


const Board = props => {
		
	const [course, setCourse] = useState(['title=TITRE']);
	
	

    function handleChange(event, type ,index) {
		setCourse([...course.slice(0,index),
			type + '=' + event.currentTarget.textContent,
			...course.slice(index+1)])
			console.log(event.currentTarget.textContent)
	}

    function deleteEntry(index){
		setCourse([...course.slice(0, index),
				...course.slice(index+1)])
	}

    function addChapter(index){
		
		setCourse([...course.slice(0, index+1),
				'chapter=',
				...course.slice(index+1)])
	}

    function addSubchapter(index){
	
		setCourse([...course.slice(0, index+1),
				'subchapter=',
				...course.slice(index+1)])
	}

    function addText(index){
		setCourse([...course.slice(0, index+1),
				'text=',
				...course.slice(index+1)])
	}

    function addImage(index){
		setCourse([...course.slice(0, index+1),
				'image=',
				...course.slice(index+1)])
	}

    function addQuestion(index){
		setCourse([...course.slice(0, index+1),
				'question=',
				...course.slice(index+1)])
	}

    function addPowerPoint(index){
		setCourse([...course.slice(0, index+1),
				'ppp=',
				...course.slice(index+1)])
	}

    function addSeparation(index){
		setCourse([...course.slice(0, index+1),
				'...=',
				...course.slice(index+1)])
	}

    function addQuotes(index){
		setCourse([...course.slice(0, index+1),
				'""=',
				...course.slice(index+1)])
	}

	


    const boardBody = (
        course.map((string, index) => (		
		    <div key={index}>
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
						index={index}/>
				</div>
		    </div>
		))
	)

    return (
        <div className='board'>
            <div className='board-header'>
                <button>Publier</button>
                <button>Sauvegarder</button>
            </div>
            <div className='board-body'>
				{boardBody}
            </div>
        </div>
    )
};

export default Board;
