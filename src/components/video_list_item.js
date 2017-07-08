import React from 'react';

const VideoListItem= ({video})=>{

	return (
		<li className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={video.snippet.thumbnails.default.url}/>
				</div>
				<div className="media-body">
					<div className="media-heading">
						<h3>{video.snippet.title}</h3>
						<h4>{video.snippet.channelTitle}</h4>
					</div>
				</div>
			</div>
		</li>
		) ;

};

export default VideoListItem;