import _ from 'lodash';
import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';


class YouTubeSearcher extends Component{

	state = {videos: [], selectedVideo:null };
	
	componentWillMount(){
    this.videoSearch('react redux');
	}

  constructor(props){
	  super(props);
	  this.updateDetailOnVideoSelect=this.updateDetailOnVideoSelect.bind(this);
	  this.videoSearch= _.debounce( this.videoSearch.bind(this), 400 );
	}

 	render(){
    return (
		<div>
			<SearchBar onSearchTermChange={this.videoSearch}/>
      <VideoDetail video={this.state.selectedVideo}/>
			<VideoList
        videos={this.state.videos}
        onVideoSelect={this.updateDetailOnVideoSelect}
      />
		</div>
		); 
	}

  videoSearch(term) {
    YTSearch(
      {key: 'AIzaSyB13uI4dyboew2ZPMQ-vzbUiSdBmd1Q8tU', term: term},
      videos => {
        console.log(videos);
        this.setState({videos, selectedVideo: videos[0]});
      }
    );
  }
	updateDetailOnVideoSelect(v){
 	  console.log("updating from ", v);
    this.setState( {selectedVideo:v} );
  }

}

export default YouTubeSearcher;