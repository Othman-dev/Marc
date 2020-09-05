import React, { useState } from 'react';
import './InputBar.scss'
//components
//import Coktail from '../Coktail/Coktail'

const InputBar = props => {

   

    const { string } = props

    const type = string.slice(0, string.indexOf('='))

    const content = string.slice(string.indexOf('=') + 1)


    function inputDivCreator() {
        if (type === 'title') {
            return <div contentEditable="true" data-text='TITRE DU COURS/QCM' className='input-big-title'>
                {content}</div>
        }
        else if (type === 'chapter') {
            return <div contentEditable="true" data-text='Nom du chapitre' className='input-sm-title'>
                {content}</div>
        }
        else if (type === 'subchapter') {
            return <div contentEditable="true" data-text='Nom du sous-chapitre' className='input-subchapter'>
                {content}</div>
        }
        else if (type === 'text') {
            return <div contentEditable="true" data-text='Texte' className='input-content'>
                {content}</div>
        }
        else if (type === 'separation') {
            return <div className='input-separation'>
                *******************</div>
        }
        else if (type === 'quote') {
            return <div contentEditable="true" data-text='Citation'  className='input-quote'>
                {content}</div>
        }
        else if (type === 'ppp') {
            return <div contentEditable="true" className='input-ppp'>
                <input type='file' placeholder='Ajouter un Power-Point' /> </div>
        }
        else if (type === 'image') {
            return <div contentEditable="true" className='input-image'>
                <input type='file' placeholder='Ajouter une image' /> </div>
        }

        else if (type === 'question') {
            return <div contentEditable="true" data-text='Nouvelle Question' className='input-content'>
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
