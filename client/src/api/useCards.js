import {useState, useEffect} from 'react';
import Axios from 'axios';

export function useCards() {
    const [cards, setCards] = useState([])
   useEffect(() => {
				Axios.get('http://localhost:4000/api/cards/')
				.then(res => {
				    setCards(res.data)
				})
				.catch(err => {
						})
    },[])


   
    return cards;
  };

