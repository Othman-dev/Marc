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

    const plus = classNames({
        'dark': act === false,
        'light': act
    })

    const onClick = type => {



        if (type === 't') {
            props.addTitle();
        }
        else if (type === 'c') {
            props.addChapter();
        }
        else if (type === 'sc') {
            props.addSubchapter();
        }
        else if (type === 'txt') {
            props.addText();
        }
        else if (type === 'q') {
            props.addQuote();
        }
        else if (type === 'img') {
            props.addImage();
        }
        else if (type === 'ppp') {
            props.addPpp();
        }
        else if (type === 'sep') {
            props.addSeparation();
        }
        else if (type === 'que') {
            props.addQuestion();
        }
        else if (type === 'del') {
            props.delete();
        }



        setAct(true);
    }

    return (
        <div className='coktail'>
            {
                act ?
                    <button className={plus} onClick={handlePlus} ><i className="fas fa-plus" /></button> :

                    <div className={classes}>
                        <button onClick={handlePlus} ><i className="fas fa-times" /></button>
                        <button onClick={() => onClick('t')}>T</button>
                        <button onClick={() => onClick('c')}>C</button>
                        <button onClick={() => onClick('sc')}>sC</button>
                        <button onClick={() => onClick('txt')}><i className="fas fa-bars" /></button>
                        <button onClick={() => onClick('q')}>Citation</button>
                        <button onClick={() => onClick('img')} ><i className="fas fa-camera"></i></button>
                        <button onClick={() => onClick('ppp')} ><i className="fas fa-file"></i></button>
                        <button onClick={() => onClick('sep')} >Séparation</button>
                        <button onClick={() => onClick('que')} >Question</button>
                        <button onClick={() => onClick('del')} >Supprimer</button>
                       
                    </div>
            }


        </div>
    )
};

export default Coktail;
