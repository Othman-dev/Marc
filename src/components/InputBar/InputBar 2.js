import React, { useState } from 'react';
import './InputBar.scss'
//components
//import Coktail from '../Coktail/Coktail'

const InputBar = props => {

    const [mouse, setMouse] = useState(false)

    const {string} = props

    const type = string.slice(0, string.indexOf('='))

    const content = string.slice(string.indexOf('=')+1)

    const enter = () => {
        setMouse(true)
    }

    const leave = () => {
        setMouse(false)
    }

    function inputDivCreator() {
			if(type==='title'){
            return <div contentEditable="true" data-text='TITRE DU COURS/QCM' className='input-big-title'>
		    {content}</div>}
		    else if(type==='chapter'){
            return <div contentEditable="true" data-text='Nom du chapitre' className='input-sm-title'>
		    {content}</div>}
		    else if(type==='subchapter'){
            return <div contentEditable="true" data-text='Nom du sous-chapitre' className='input-subtitle'>
		    {content}</div>}
		    else if(type==='text'){
            return <div contentEditable="true" data-text='Texte' className='input-content'>
		    {content}</div>}
	}

    const inputDiv = (
		inputDivCreator()
	)

console.log(type)
console.log(content)


    return (
        <div className='input-bar' onMouseEnter={enter} onMouseLeave={leave} >
		    {inputDiv} 
			{
                mouse === true ?

                    <button className='options-btn' onClick={props.deleteBtn}> <i className="fas fa-times"></i> </button>  : null
            }
   
            

        </div>
    )
}

export default InputBar;
