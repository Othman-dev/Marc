import React,{createContext, useReducer} from 'react';
import {hashtagReducer, selectionReducer} from '../reducers/reducers';

export const HashtagContext = createContext();

const HashtagProvider = (props) => {

		const [tags, dispatchTags] = useReducer(hashtagReducer, [
				{
				  name: 'HISTOIRE',
				  active: false,
				  custom: false
				},
				{
				  name: 'GEOGRAPHIE',
				  active: false,
				  custom: false
     			},
				{
				  name: 'QCM',
				  active: false,
				  custom: false
				},
				{
				  name: 'SIXIEME',
				  active: false,
				  custom: false
				},
				{
				  name: 'CINQUIEME',
				  active: false,
				  custom: false
				},
				{
				  name: 'QUATRIEME',
				  active: false,
				  custom: false
				},
				{
				  name: 'TROISIEME',
				  active: false,
				  custom: false
				}
		]);

		const [selected, dispatchSelected] = useReducer(selectionReducer, []); 

		return (
				<HashtagContext.Provider value={{tags, dispatchTags, selected, dispatchSelected}}>
				{props.children}
				</HashtagContext.Provider>
		);
};
export default HashtagProvider;
