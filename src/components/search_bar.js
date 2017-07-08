import React, {Component} from 'react';


const SearchBarV1= function(){ return <input/>; }

const searchBoxPlaceholderText="find videos…"

class SearchBar extends Component {

	state={term:'', lastKeyPress:undefined}

	render() {
		console.log('render');
		return (
			<div>
			  <input value={this.state.term} onInput={this.onInput} placeholder={searchBoxPlaceholderText} onKeyPress={this.onKeyPress}/>
				: {this.state.term} {this.state.lastKeyPress}
			</div>
		);
	}

	onInput(e){ 
		const v=e.target.value; 
		this.setState( s=> ({term : v, lastKeyPress: s.lastKeyPress })); 
	}

	onKeyPress(e){ 
		const t= e.target.value; 
		const k= e.which;
		this.setState( s=>({term : s.term, lastKeyPress: k }));
	}

	constructor(props){
		super(props);
		this.onInput=this.onInput.bind(this);
		this.onKeyPress=this.onKeyPress.bind(this);
	}
	toString(){ return this.state; }
}

export default SearchBar;