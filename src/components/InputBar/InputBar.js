import React, { useState } from 'react';
import './InputBar.scss'

const InputBar = props => {

    const [mouse, setMouse] = useState(false)
   
    const type = props.string.slice(0, props.string.indexOf('='))

    const content = props.string.slice(props.string.indexOf('=')+1)

    const enter = () => {
			if(type === 'title'){}
			else {setMouse(true)}
    }

    const leave = () => {
        setMouse(false)
    }

    function inputDivCreator() {
			if(type==='title'){
				return <div 
						contentEditable 
						suppressContentEditableWarning
						data-text='TITRE DU COURS/QCM'
						className='input-big-title'
						onBlur={(event) => props.handleChange(event, type, props.index)}>
		            {content}</div>}
		    else if(type==='chapter'){
                return <div 
						contentEditable
						suppressContentEditableWarning
						data-text='Nom du chapitre'
						className='input-sm-title'
						onBlur={(event) => props.handleChange(event, type, props.index)}>
		            {content}</div>}
		    else if(type==='subchapter'){
				return <div
						contentEditable
						suppressContentEditableWarning
						data-text='Nom du sous-chapitre'
						className='input-subtitle'
						onBlur={(event) => props.handleChange(event, type, props.index)}>
				    {content}</div>}
		    else if(type==='text'){
				return <div 
						contentEditable
						suppressContentEditableWarning
						data-text='Texte'
						className='input-content'
						onBlur={(event) => props.handleChange(event, type, props.index)}>
				    {content}</div>}
	}

    const inputDiv = (
		inputDivCreator()
	)

		
    return (
        <div className='input-bar' onMouseEnter={enter} onMouseLeave={leave} >
		    {inputDiv} 
			{
                mouse === true ?

                    <button className='options-btn' onClick={() => props.deleteEntry(props.index)}> <i className="fas fa-times"></i> </button>  : null
            }
   
            

        </div>
    )
}

export default InputBar;
