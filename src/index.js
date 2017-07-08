import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';


const youtubeApiKeyv3='AIzaSyB13uI4dyboew2ZPMQ-vzbUiSdBmd1Q8tU';


class App extends Component{

 	render(){ return (
		<div>
			<SearchBar />
			<VideoList videos={this.state.videos}/>
		</div>
		); 
	}

	componentWillMount(){
		YTSearch(
			{key:youtubeApiKeyv3, term:'surfboards'}, 
			videos=> { console.log(videos) ; this.setState({videos});} 
			);
	}

	constructor(props){ super(props); }

	state = {videos: [] }
}

ReactDOM.render(<App/>, document.querySelector('div'));
