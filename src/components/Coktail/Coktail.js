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

    console.log(act)
    console.log(classes)
    return (
        <div className='coktail'>
            {
                act ?
                    <button className={props.className} onClick={handlePlus} ><i class="fas fa-plus"></i></button> :

                    <div className={classes}>
                        <button className={props.className} onClick={handlePlus} ><i class="fas fa-times"></i></button>
                        <button onClick={props.handleTitleBtn} >T</button>
                        <button onClick={props.handleSubtitleBtn} >ST</button>
                        <button onClick={props.handleContentBtn} ><i class="fas fa-bars"></i></button>
                        <button onClick={props.handleQuoteBtn} ><i class="fas fa-quote-right"></i></button>
                        <button onClick={props.handlePictureBtn} ><i class="fas fa-camera"></i></button>
                        <button onClick={props.handlePpBtn} ><i class="fas fa-play"></i></button>


                        <button onClick={props.handleSeparation} >Séparation
                </button>

                        <button><i class="fas fa-level-down-alt fa-rotate-90"></i></button>

                    </div>
            }


        </div>
    )
};

export default Coktail;