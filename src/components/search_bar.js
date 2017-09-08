import React, {Component} from 'react';

const SearchBarV1= function(){ return <input/>; }

const searchBoxPlaceholderText="find videos…"

class SearchBar extends Component {

	state={term:'', lastKeyPress:undefined}

	constructor(props){
		super(props);
		this.onInput=this.onInput.bind(this);
		this.onChangeValue=this.onChangeValue.bind(this);
	}

	render() {
		console.log('render');
		return (
			<div className="search-bar">
			  <input value={this.state.term}
							 onInput={this.onInput}
							 placeholder={searchBoxPlaceholderText}
							 onChange={e=>this.onChangeValue(e.target.value)}/>
				 ( {this.state.term} / {this.state.lastKeyPress} )
			</div>
		);
	}

	onInput(e){ this.setState( {lastKeyPress: e.which }); }

	onChangeValue(term){
		this.setState({term});
		this.props.onSearchTermChange(term);
	}

	toString(){ return this.state; }
}

export default SearchBar;