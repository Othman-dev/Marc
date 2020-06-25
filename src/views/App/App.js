import React, { useState } from 'react';
import './App.scss';
//components
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Body from '../../components/Body/Body'
//api
import useCards from '../../api/useCards'


function App() {

  const cards = useCards();
  const [hashtagList, setHashtagList] = useState([]);
  const [data, setData] = useState(cards || []);
  
  

  const removeItem = (arr, value) => {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
      setHashtagList(arr)
    }
    return arr;
  }

  const filterByHashtag = (arr, secondarray) => {
    let result = arr.filter(item => item.hashtag.some(string => secondarray.includes(string)))
    setData(result)
    
  }

  const hashtagClick = (hashtag, active) => {

    if (active) {
      setHashtagList(oldTags => [...oldTags, hashtag])
    } else {
      removeItem(hashtagList, hashtag)
    }
    filterByHashtag(cards, hashtagList);
    
  }
console.log(hashtagList)


  return (
    <div className="App">
      <Navbar logo='LOGO' links={<h4>About</h4>} />
      <Header hashtagClick={hashtagClick}  />
      <Body data={data} />

    </div>
  );
}

export default App;
