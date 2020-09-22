import {useState, useEffect} from 'react';
import fire from './firebase-config';
import Axios from 'axios';

export function useCards() {
    const [cards, setCards] = useState([])
   useEffect(() => {
				Axios.get('http://localhost:4000/api/cards/')
				.then(res => {
				    console.log(res)
				    setCards(res.data)
				})
				.catch(err => {
						console.log(err)
						})
    },[])


   
    return cards;
  };

