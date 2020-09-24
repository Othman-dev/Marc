import {useState, useEffect} from 'react';
import Axios from 'axios';

export function useCards() {
    const [cards, setCards] = useState([])
   useEffect(() => {
				Axios.get('https://stormy-shelf-35576.herokuapp.com/api/cards/')
				.then(res => {
				    setCards(res.data)
				})
				.catch(err => {
						})
    },[])


   
    return cards;
  };

