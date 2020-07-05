import React, { useState, useEffect, useReducer } from 'react';
import './App.scss';
//components
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Body from '../../components/Body/Body'
//api
import { useCards } from '../../api/useCards'

const reducer = (state, action) => {
  switch(action.type) {
    case 'true': 
    
  }
} 

function App() {

  const cards = useCards();
  const [data, setData] = useState([])

  useEffect(() => {
    setData(cards)
  }, [cards])

  const cardsFiltered = (name) => {
    const result = cards.filter(item => item.hashtag.some(string => string === name))
    return result
  }

  let tagList = [
    {
      name: 'HISTOIRE',
      active: false,
      dataFiltered: cardsFiltered('HISTOIRE')
    },
    {
      name: 'GEOGRAPHIE',
      active: false,
      dataFiltered: cardsFiltered('GEOGRAPHIE')
    },
    {
      name: 'QCM',
      active: false,
      dataFiltered: cardsFiltered('QCM')
    },
    {
      name: 'SIXIEME',
      active: false,
      dataFiltered: cardsFiltered('SIXIEME')
    },
    {
      name: 'CINQUIEME',
      active: false,
      dataFiltered: cardsFiltered('CINQUIEME')
    },
    {
      name: 'QUATRIEME',
      active: false,
      dataFiltered: cardsFiltered('QUATRIEME')
    },
    {
      name: 'TROISIEME',
      active: false,
      dataFiltered: cardsFiltered('TROISIEME')
    }
  ]


  const hashtagClick = (tag, active) => {

    console.log()
  }

  return (
    <div className="App">
      <Navbar logo='LOGO' links={<h4>About</h4>} />
      <Header hashtagClick={hashtagClick} tags={tagList} />
      <Body data={data} />

    </div>
  );
}

export default App;
