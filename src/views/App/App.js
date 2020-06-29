import React, { useState, useEffect } from 'react';
import './App.scss';
//components
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Body from '../../components/Body/Body'
//api
import { useCards } from '../../api/useCards'

function App() {

  const cards = useCards();
  // const [globalState, setGlobalState] = useCustom();
  const [selected, setSelected] = useState([]);
  const [data, setData] = useState(cards || []);
  const tagList = [
    {
      name: 'HISTOIRE',
      active: false
    },
    {
      name: 'GEOGRAPGHIE',
      active: false
    },
    {
      name: 'QCM',
      active: false
    },
    {
      name: 'SIXIEME',
      active: false
    },
    {
      name: 'CINQUIEME',
      active: false
    },
    {
      name: 'QUATRIEME',
      active: false
    },
    {
      name: 'TROISIEME',
      active: false
    }
  ]
  const [tags, setTags] = useState(tagList);




  useEffect(() => {
    setData(cards)
  }, [cards, setData])



  const removeItem = (arr, value) => {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
      setSelected(arr)
    }
    return arr;
  }

  const filterByHashtag = (arr, secondarray) => {
    let result = arr.filter(item => item.hashtag.some(string => secondarray.includes(string)))
    setData(result)
  }


  const hashtagClick = (tag, active) => {
  
    active = !active;

    const newTag = {
      name: tag,
      active: active
    }
    // const newTags = tags.map(object => object.name === tag)
    for(let i = 0; i < tags.length; i++) {
      if(tags[i].name === newTag.name) {
        tags[i].active = active
        setTags(tags)
      
    }}
   
    console.log(tags)




    active ? 
    setSelected(oldTags => [...oldTags, tag]) : 
    removeItem(selected, tag)


    console.log(active)



    // if (selected === []) {
    //   selected(oldTags => [...oldTags, tag])
    // } else if(active) {
    //   selected(oldTags => [...oldTags, tag])
    // } else {
    //   removeItem(selected, tag)
    // };

    filterByHashtag(cards, selected)
  }




  return (
    <div className="App">
      <Navbar logo='LOGO' links={<h4>About</h4>} />
      <Header hashtagClick={hashtagClick} tags={tags} />
      <Body data={data} />

    </div>
  );
}

export default App;
