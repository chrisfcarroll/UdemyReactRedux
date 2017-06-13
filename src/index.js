import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const youtubeApiKeyv3='AIzaSyB13uI4dyboew2ZPMQ-vzbUiSdBmd1Q8tU';


// create a new component
const App= function(){ return (
		<div>
			<SearchBar />
		</div>
		); 
}

ReactDOM.render(
	<App/>,
	document.querySelector('.container')
);