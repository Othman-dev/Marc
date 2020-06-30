import React, { useState, useEffect, memo } from 'react';
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
      name: 'GEOGRAPHIE',
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
  }, [cards])


  useEffect(() => {
    if (selected !== []) {
      filterByHashtag(cards, selected, setData)
    } 
  }, [cards, selected])





  const removeItem = (arr, value, setState) => {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
      setState(arr)
    }
    return arr;
  }


  const filterByHashtag = (arr, secondarray, setState) => {
    let result = 
    arr.filter(item => item.hashtag.some(string => secondarray.includes(string)))
    setState(result)
  }


  const hashtagClick = (tag, active) => {
    active = !active
    console.log('is it active ' + active)
    const newTag = {
      name: tag,
      active: active
    }
    // const newTags = tags.map(object => object.name === tag)
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].name === newTag.name) {
        tags[i].active = active;
        console.log("et la cest actif connard? " + tags[i].active)
      } 
      setTags(tags)
      console.log(tags)
    }

    console.log(tags)
    console.log(active)



    if (active) {
      console.log(active)
      setSelected(old => [...old, tag])
    } else {
      console.log(active)
      removeItem(selected, tag, setSelected)
    }
    console.log(selected)

  }


  console.log(tags)

  return (
    <div className="App">
      <Navbar logo='LOGO' links={<h4>About</h4>} />
      <Header hashtagClick={hashtagClick} tags={tags} />
      <Body data={data} />

    </div>
  );
}

export default memo(App);
