import React, { useState } from 'react';
import './SearchBar.scss'

const SearchBar = props => {

	const [searchTemp, setSearchTemp] = useState('');

	function handleChange(event) {
		setSearchTemp(event.target.value);
	}

	function handleAdd(event) {
		console.log('#' + searchTemp)
		event.preventDefault()
	}

	return (
		<form>
			<div className='searchBg'>
				<input name='search' className='search-bar' placeholder={props.placeholder} onChange={handleChange} />
				{
					props.plusButton === true ?
						<button className='searchBg' onClick={handleAdd}>
							<i className="fas fa-plus-circle fa-lg searchAdd"></i>
						</button>
						:
						null

				}

			</div>
		</form>
	)
};

export default SearchBar;
