import React from 'react';
import './SearchBoxStyle.css';
import SearchBox from './SearchBox';

function Home() {
	return (
		<>
			<div className='movie-bg'></div>
			<div className='movie-bg-2'></div>
			<div className='all-elements'>
				<SearchBox />
			</div>
		</>
	);
}

export default Home;
