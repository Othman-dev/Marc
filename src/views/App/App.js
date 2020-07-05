import React, {
  useState,
  useEffect,
  useLayoutEffect,
  createContext,
  useReducer,
  useCallback
} from 'react';
import './App.scss';
//components
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Body from '../../components/Body/Body'
import { tagList } from '../../data/tagList'
//api
import { useCards } from '../../api/useCards'



export const HashtagContext = createContext();

const hashtagReducer = (tags, action) => {
  switch (action.type) {
    case 'tagSelected':
      return [
        ...tags.slice(0, action.index),
        {
          ...tags[action.index],
          active: !tags[action.index].active
        },
        ...tags.slice(action.index + 1)
      ];
    default:
      return tags
  }
}

const selection = (selected, action) => {
  switch (action.type) {
    case 'active':
      return [
        ...selected, action.tag
      ];
    case 'noneactive':
      return [
        ...selected.filter(tag => tag !== action.tag)

      ];
    default:
      return selected
  }
}

function App() {

  const cards = useCards();
  const [tags, dispatchTags] = useReducer(hashtagReducer, tagList)
  const [selected, dispatchSelected] = useReducer(selection, [])
  const [data, setData] = useState([]);

  useEffect(() => {
   setData(cards)

  }, [cards])


  const filterByHashtag = (arr, secondarray, setState) => {
    let result = arr.filter(item => item.hashtag.some(string => secondarray.includes(string)))
    setState(result)
  }

  useLayoutEffect(() => {
    if (selected === []) {
      setData(cards)
    }
    return filterByHashtag(cards, selected, setData)
  }, [cards, selected])



  const hashtagClick = useCallback((tag, index, active) => {
    console.log('click');

    dispatchTags({ type: 'tagSelected', index: index })


    if (!active) {
      dispatchSelected({ type: 'active', tag: tag })
    }
    else {
      dispatchSelected({ type: 'noneactive', tag: tag })
    }

  }, [])


  console.log('render app')
  console.log(data)



  return (

    <div className="App">
      <Navbar logo='LOGO' links={<h4>About</h4>} />
      <HashtagContext.Provider value={{ tags, hashtagClick }}>
        <Header />
      </HashtagContext.Provider>
      <Body data={data} />

    </div>


  );
}

export default App;
