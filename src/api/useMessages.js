import {useState, useEffect} from 'react';
import fire from './firebase-config.js';

export function useMessages() {
    const [message, setMessage] = useState([])
   useEffect(() => {
				const fetchData = fire.firestore().collection('messages')
		   		.onSnapshot((snapshot) => {
				    const newData = snapshot.docs.map((doc) => ({
						...doc.data()
				}))
				setMessage(newData)
				})
		   return () => fetchData()
    },[])
   
    return message;
  };
