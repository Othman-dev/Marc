import React, { useState } from 'react';
import classNames from 'classnames';
import './Coktail.scss';

const Coktail = props => {

    const [act, setAct] = useState(true);



    const handlePlus = () => {
        setAct(!act)
    }

    const classes = classNames({
        'display-none': act,
        'display-flex': act === false
    })

    return (
        <div className='coktail'>
            {
                act ?
                    <button className={props.className} onClick={handlePlus} ><i className="fas fa-plus"/></button> :

                    <div className={classes}>
                        <button onClick={handlePlus} ><i className="fas fa-times"/></button>
                        <button onClick={props.addChapter}>C</button>
                        <button onClick={props.addSubchapter}>sC</button>
                        <button onClick={props.addText}><i className="fas fa-bars"/></button>
                        <button onClick={props.addImage} ><i className="fas fa-camera"></i></button>
                        <button onClick={props.addSeparation} >Séparation</button>
                        <button><i className="fas fa-level-down-alt fa-rotate-90"/></button>
                    </div>
            }


        </div>
    )
};

export default Coktail;
