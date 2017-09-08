import React from 'react';
import VideoListItem from './video_list_item';

const VideoList= (props)=> {

	const items=props.videos.map( v => (
		<VideoListItem
      video={v}
      key={v.etag}
      onVideoSelect={props.onVideoSelect}
    />)
	);

	return (<ul className="col-md-8 list-group video-list">{items}</ul>);
}

export default VideoList;