import React, {useState, useContext} from 'react';
import './SearchBar.scss'
import {HashtagContext} from '../../assets/context/HashtagContext';

const SearchBar = props => {

		const {tags, dispatchTags, dispatchSelected} = useContext(HashtagContext)

		const [searchTemp, setSearchTemp] = useState('');

		function handleChange(event) {
				setSearchTemp(event.target.value);
		}

		function handleAdd(event) {
				dispatchTags({ type: 'tagAdd', name: searchTemp.toUpperCase() })
				dispatchSelected({ type: 'active', tag: searchTemp.toUpperCase() })
				event.preventDefault()
				setSearchTemp('')
		}

    return (
			<form>
				<div className='search-bg'>
				    <input name='search' className='search-bar' placeholder={props.placeholder} value={searchTemp} onChange={handleChange}/>
				    <button className='search-bg' onClick={handleAdd}>
						<i className="fas fa-plus fa-lg search-add"></i>
				    </button>
				</div>
		    </form>
	) 
};

export default SearchBar;
