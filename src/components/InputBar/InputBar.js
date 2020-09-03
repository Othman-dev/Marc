import React, { useState } from 'react';
import './InputBar.scss'
//classnames
import classNames from 'classnames'
//components
import Coktail from '../Coktail/Coktail'

const InputBar = props => {

    const [mouse, setMouse] = useState(false)


    const enter = () => {
        setMouse(true)
    }

    const leave = () => {
        setMouse(false)
    }




    return (
        <div className='input-bar' onMouseEnter={enter} onMouseLeave={leave} >
            <div
                contentEditable="true"
                data-text={props.placeholder}
                className={props.className}
            >
                {props.kids}
            </div>
            {
                mouse === true ?

                    <button className='options-btn' onClick={props.deleteBtn}> <i class="fas fa-times"></i> </button>  : null
            }
   
            

        </div>
    )
}

export default InputBar;