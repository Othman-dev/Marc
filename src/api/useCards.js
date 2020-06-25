import {useState, useEffect} from 'react';
import fire from './firebase-config';


function useCards() {
    const [cards, setCards] = useState([])
    useEffect(() => {
      fire
        .firestore()
        .collection("cards")
        .onSnapshot(snapshot => {
          const card = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }))
          setCards(card)
        })
    }, [])
    return cards;
  };

  export default useCards;