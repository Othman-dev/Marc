import React, {createContext, useState, useEffect} from 'react';
import firebase from '../../api/firebase-config';

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {

		const [currentUser, setCurrentUser] = useState(null);

		useEffect(() => {
				firebase.auth().onAuthStateChanged((user) => setCurrentUser(user));
		}, []);

		return (

				<AuthContext.Provider value={currentUser}>
				{props.children}
				</AuthContext.Provider>

		);
};
