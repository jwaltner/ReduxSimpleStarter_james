import React from 'react';
import VideoListItem from './video_list_item';

// we didthe search in the parent app. now we need to render the
// video list and pass it the props data
const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    // we should add a key so react can index things quickly.
    return <VideoListItem key={video.etag} video={video} />
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
