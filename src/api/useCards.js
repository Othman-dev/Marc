import {useState, useEffect} from 'react';
import fire from './firebase-config.js';

export function useCards() {
    const [cards, setCards] = useState([])

   useEffect(() => {
				const fetchData = fire.firestore().collection('cards')
		   		.onSnapshot((snapshot) => {
				    const newData = snapshot.docs.map((doc) => ({
						...doc.data()
				}))
				setCards(newData)
				})
		   return () => fetchData()
    },[])
    return cards;
};

