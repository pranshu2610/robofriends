import React from 'react';
const SearchBox = ({searchfield, searchChange}) => {
	return (
		<div className='pa2'>
		<input className='pa3 w-third ba bw2 br3 b--white o-50' 
		type='search' placeholder='Search'
		onChange={searchChange}
		/>
		</div>
		);
}
export default SearchBox;