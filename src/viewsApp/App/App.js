import React, {
  useState,
  useEffect,
  useLayoutEffect,
  createContext,
  useReducer,
  useCallback
} from 'react';
import { Link } from 'react-router-dom'
//css
import './App.scss';
//components
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Body from '../../components/Body/Body';
import NavByHashtag from '../../components/NavByHashtag/NavByHashtag';
// import SearchBar from '../../components/SearchBar/SearchBar';

//data
import { tagList } from '../../assets/data/tagList'
//api
import { useCards } from '../../api/useCards'
//reducers
import {
  hashtagReducer,
  selectionReducer
} from '../../assets/reducers/reducers'


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
    <div className="App" >
      <HashtagContext.Provider value={{ tags, hashtagClick, history }}>
        <Navbar logo='LOGO' links={<Link to='/about'>About</Link>} />
        <Header />
        <div className='navigation' id='nav'>
          <div>
            <h2 className='mt-large'>Utilisez les #Hashtags pour faire vos recherches. Selectionnez-en un ou plusieur pour filtrer les cours. Vous pouvez également en ajouter. </h2>
          </div>

          <NavByHashtag />

        </div>

        <Body data={data} selected={selected} cards={cards} />
      </HashtagContext.Provider>


    </div>
  );
}

export default App;
