import React from 'react';

// const VideoListItem = (props) => {
  // const video = props.video;
// since we know we just passed one item, we can use the
// curly braces to define it instead of defining a const for this
// VideoListItem
const VideoListItem = ({video, onVideoSelect}) => {
  // console.log() gives you an expandable JSON object.
  // console.log(video);
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;
