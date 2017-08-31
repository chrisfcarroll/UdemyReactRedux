import React from 'react';

const VideoListItem= ({video, onVideoSelect})=>{

	function onClick(){
	  console.log("clicking", video);
	  onVideoSelect(video);
  }

	return (
		<li className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
          <a href="#" onClick={()=>onVideoSelect(video)}>
					  <img className="media-object" src={video.snippet.thumbnails.default.url}/>
          </a>
				</div>
				<div className="media-body">
					<div className="media-heading">
						<h3><a href={"https://www.youtube.com/watch?v="+video.id.videoId}>{video.snippet.title}</a></h3>
						<h4>{video.snippet.channelTitle}</h4>
					</div>
				</div>
			</div>
		</li>
		) ;

};

export default VideoListItem;