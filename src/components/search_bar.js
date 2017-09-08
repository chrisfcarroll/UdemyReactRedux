import React, {Component} from 'react';

const SearchBarV1= function(){ return <input/>; }

const searchBoxPlaceholderText="find videos…"

class SearchBar extends Component {

	constructor(props){ super(props);}

	render() {
		console.log('render');
		return (
			<div className="search-bar">
			  <input
							 placeholder={searchBoxPlaceholderText}
							 onChange={e=>this.props.onSearchTermChange(e.target.value)}/>
			</div>
		);
	}
}

export default SearchBar;