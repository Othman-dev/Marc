import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
//css
import './App.scss';
import classNames from 'classnames';
//components
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Body from '../../components/Body/Body';
import NavByHashtag from '../../components/NavByHashtag/NavByHashtag';
//contextProvider
import HashtagProvider from '../../assets/context/HashtagContext';


const PhoneBar = () => {

  const [open, setOpen] = useState(false)

 

  const barClasses = classNames({
    'phone-bar-close': open === false,
    'phone-bar-open': open
  })



  return (
    <div className={barClasses}>

      <div className='phone-bar-header'>
      {
          open === false &&  <button className='touch' onClick={() => setOpen(!open)}>
          Filtrer avec les #Hastags
      </button>
        }
        {
          open &&  <button className='touch' onClick={() => setOpen(!open)}>
          Fermer
      </button>
        }
       
      </div>

      {
        open && <div className='phone-bar-body'>


          <NavByHashtag />
        </div>
      }


 
      
    </div>
  )
}


const App = (props) => {

  const [act, setAct] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
  })

  const onScroll = e => {
    let coords = window.scrollY

    if (coords >= 100) {
      setAct(true)
    }
    else {
      setAct(false)
    }
  }

  console.log(act)
  return (
    <div className="App" onScroll={onScroll}>
      <HashtagProvider>
        <Navbar logo='LOGO' links={<Link to='/about'>About</Link>} />
        <Header />
      
        {
          act && <PhoneBar />
        }
        <div className='advice'>
          <h2>Utilisez les #Hashtags pour faire vos recherches. Selectionnez-en un ou plusieurs pour filtrer les cours. Vous pouvez également en ajouter. </h2>
        </div>
        <div className='navigation' id='nav'>



          <NavByHashtag />
        

        </div>
        <Body />
       
      </HashtagProvider>


    </div>
  );
}

export default App;
