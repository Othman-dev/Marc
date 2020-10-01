import {useState, useEffect} from 'react';
import Axios from 'axios';

export function useMessages() {
    const [message, setMessage] = useState([])
   useEffect(() => {
				Axios.get('https://radiant-shore-19271.herokuapp.com/api/message/')
				.then(res => {
				    setMessage(res.data)
				})
				.catch(err => {
						})
    },[])


   
    return message;
  };