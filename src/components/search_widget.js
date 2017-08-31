import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';


class SearchWidget extends Component{

	state = {videos: [], selectedVideo:null };
	
	componentWillMount(){
		YTSearch(
			{key:'AIzaSyB13uI4dyboew2ZPMQ-vzbUiSdBmd1Q8tU', term:'surfboards'},
			videos=> { 
				console.log(videos) ; 
				this.setState({videos, selectedVideo:videos[0] });}
			);
	}

	constructor(props){
	  super(props);
	  this.updateDetailOnVideoSelect=this.updateDetailOnVideoSelect.bind(this);
	}

 	render(){ return (
		<div>
			<SearchBar />
      <VideoDetail video={this.state.selectedVideo}/>
			<VideoList
        videos={this.state.videos}
        onVideoSelect={this.updateDetailOnVideoSelect}
      />
		</div>
		); 
	}

	updateDetailOnVideoSelect(v){
 	  console.log("updating from ", v);
    this.setState( {selectedVideo:v} );
  }

}

export default SearchWidget;