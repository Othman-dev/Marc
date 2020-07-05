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
//data
import { tagList } from '../../data/tagList'
//api
import { useCards } from '../../api/useCards'
//reducers
import {
  hashtagReducer,
  selectionReducer
} from '../../reducer/reducers'

export const HashtagContext = createContext();

const App = (props) => {

  const cards = useCards();
  const [tags, dispatchTags] = useReducer(hashtagReducer, tagList)
  const [selected, dispatchSelected] = useReducer(selectionReducer, [])
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(cards)
  }, [cards])

  useLayoutEffect(() => {
    filterByHashtag(cards, selected, setData)
  }, [cards, selected])

  const filterByHashtag = (arr, secondarray, setState) => {
    let result = arr.filter(item => item.hashtag.some(string => secondarray.includes(string)))
    setState(result)
  }
  //faire des categories [histoire, geo] => [3eme, 4eme, 5eme, 6eme] => [qcm, cours]


  const hashtagClick = useCallback((tag, index, active) => {

    dispatchTags({ type: 'tagSelected', index: index })
    if (!active) {
      dispatchSelected({ type: 'active', tag: tag })
    }
    else {
      dispatchSelected({ type: 'noneactive', tag: tag })
    }
  }, [])

  const { history } = props;

  return (
    <div className="App" {...props}>
      <HashtagContext.Provider value={{ tags, hashtagClick, history }}>

        <Navbar logo='LOGO' links={<h4>About</h4>} />
        <Header />
        <Body data={data} selected={selected} cards={cards} />
      </HashtagContext.Provider>


    </div>
  );
}

export default App;
