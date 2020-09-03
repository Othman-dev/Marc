import React, { useState } from 'react';
import './layout.scss';
import classNames from 'classnames';
//components
import InputBar from '../components/InputBar/InputBar'
import Coktail from '../components/Coktail/Coktail'



const Board = props => {

    const title = {
        placeholder: 'TITRE DU COUR',
        className: 'input-big-title'
    }

    const [courses, setCourses] = useState([title]);



    const handleTitleBtn = () => {
        setCourses([...courses, {
            placeholder: 'Titre du chapitre',
            className: 'input-sm-title'
        }])

    }

    const handleSubtitleBtn = () => {
        setCourses([...courses, {
            placeholder: 'Sous-Titre',
            className: 'input-subtitle'
        }])
    }

    const handleContentBtn = () => {
        setCourses([...courses, {
            placeholder: 'Contenu du cours',
            className: 'input-content'
        }])
    }

    const handleQuoteBtn = () => {
        setCourses([...courses, {
            placeholder: 'Citation',
            className: 'input-quote',
            kids: null,


        }])
    }

    const handlePictureBtn = () => {
        setCourses([...courses, {
            kids: <div className='file'>

                <input className='input-file' type='file' accept="image/*,.pdf" />
            </div>

        }])
    }

    const handlePpBtn = () => {
        setCourses([...courses, {
            kids: <div className='file'>
                <input type='file' />
            </div>
        }])

    }

    const handleSeparation = () => {
        setCourses([...courses, {
            kids: <h1 style={{ textAlign: 'center' }}> - - - </h1>
        }])
    }

    //************************ */

    const nextHandleTitleBtn = () => {
        setCourses([...courses, {
            placeholder: 'Titre du chapitre',
            className: 'input-sm-title'
        }])

    }

    const nextHandleSubtitleBtn = () => {
        setCourses([...courses, {
            placeholder: 'Sous-Titre',
            className: 'input-subtitle'
        }])
    }

    const nextHandleContentBtn = () => {
        setCourses([...courses, {
            placeholder: 'Contenu du cours',
            className: 'input-content'
        }])
    }

    const nextHandleQuoteBtn = () => {
        setCourses([...courses, {
            placeholder: 'Citation',
            className: 'input-quote',
            kids: null,
        }])
    }

    const nextHandlePictureBtn = () => {
        setCourses([...courses, {
            kids: <div className='file'>

                <input className='input-file' type='file' accept="image/*,.pdf" />
            </div>

        }])
    }

    const nextHandlePpBtn = () => {
        setCourses([...courses, {
            kids: <div className='file'>
                <input type='file' />
            </div>
        }])

    }

    const nextHandleSeparation = () => {
        setCourses([...courses, {
            kids: <h1 style={{ textAlign: 'center' }}> - - - </h1>
        }])
    }



    const deleteBtn = key => {
        setCourses([
            ...courses.slice(0, key),
            ...courses.slice(key + 1)

        ])
    }


    console.log(courses)

    return (
        <div className='board'>
            <div className='board-header'>
                <button>Publier le Cour</button>
                <button>Ajouter aux Brouillon</button>
            </div>
            <div className='board-body'>
                {
                    courses.map((course, key) =>

                        <div className='bar' key={key}>
                            <InputBar
                                className={course.className}
                                placeholder={course.placeholder}
                                kids={course.kids} key={key}
                                deleteBtn={() => deleteBtn(key)}


                            />
                            <div className='bar'>

                                <Coktail 
                                handleTitleBtn={()=>nextHandleTitleBtn(key)}
                                handleContentBtn={()=>nextHandleContentBtn(key)}
                                handlePictureBtn={()=>handlePictureBtn(key)}
                                handleQuoteBtn={()=>nextHandleQuoteBtn(key)}
                                handlePpBtn={()=>nextHandlePpBtn(key)}
                                handleSubtitleBtn={()=>nextHandleSubtitleBtn(key)}
                                handleSeparation={()=>nextHandleSeparation(key)}
        
                                />

                            </div>
                        </div>

                    )
                }
                <div className='bar' >
                    <Coktail
                        handleTitleBtn={handleTitleBtn}
                        handleContentBtn={handleContentBtn}
                        handlePictureBtn={handlePictureBtn}
                        handleQuoteBtn={handleQuoteBtn}
                        handlePpBtn={handlePpBtn}
                        handleSubtitleBtn={handleSubtitleBtn}
                        handleSeparation={handleSeparation}

                    />
                </div>


            </div>

        </div>
    )
};

export default Board;