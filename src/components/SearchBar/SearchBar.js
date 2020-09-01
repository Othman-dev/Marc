import React, {useState, useContext} from 'react';
import './SearchBar.scss'
import {hashtagReducer} from '../../assets/reducers/reducers';
import {HashtagContext} from '../../assets/context/HashtagContext';

const SearchBar = props => {

		const {tags, dispatchTags} = useContext(HashtagContext)

		const [searchTemp, setSearchTemp] = useState('');

		function handleChange(event) {
				setSearchTemp(event.target.value);
		}

		function handleAdd(event) {
				dispatchTags({ type: 'tagAdd', name: searchTemp})
				console.log(searchTemp)
				console.log(tags)
				event.preventDefault()
				setSearchTemp('')
		}

    return (
			<form>
				<div className='search-bg'>
				    <input name='search' className='search-bar' placeholder={props.placeholder} value={searchTemp} onChange={handleChange}/>
				    <button className='search-bg' onClick={handleAdd}>
						<i className="fas fa-plus-circle fa-lg search-add"></i>
				    </button>
				</div>
		    </form>
	) 
};

export default SearchBar;
