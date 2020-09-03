import React from 'react';
import { Link } from 'react-router-dom'
//css
import './App.scss';
//components
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Body from '../../components/Body/Body';
import NavByHashtag from '../../components/NavByHashtag/NavByHashtag';
//contextProvider
import HashtagProvider from '../../assets/context/HashtagContext';



const App = (props) => {

  return (
    <div className="App" >
      <HashtagProvider>
        <Navbar logo='LOGO' links={<Link to='/about'>About</Link>} />
        <Header />
        <div className='navigation' id='nav'>
          <div>
            <h2 className='mt-large'>Utilisez les #Hashtags pour faire vos recherches. Selectionnez-en un ou plusieur pour filtrer les cours. Vous pouvez également en ajouter. </h2>
          </div>

          <NavByHashtag />

        </div>

        <Body/>
      </HashtagProvider>


    </div>
  );
}

export default App;
