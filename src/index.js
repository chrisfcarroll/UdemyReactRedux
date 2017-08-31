import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchWidget from './components/search_widget';

const App = (props)=> (
	<div>
		<header>Demo</header>
		<SearchWidget/>
	</div>
	);

ReactDOM.render(<App/>, document.querySelector('.the-application'));
