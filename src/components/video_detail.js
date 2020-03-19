import React from 'react';

// Since there is only one element passed to video_detail, we
// can immediately instantiate it as the {video} and don't need
// to use "props"
// const VideoDetail = (props) => {
const VideoDetail = ({video}) => {
  // during the first call, the video may be undefined... therefore
  // we need to protect our function from trying to access an element
  // of undefined.
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;

  // use back-tics in ES6 to inject variables into a string
  // instead of single or double quotes for the string.
  // const url = 'https://www.youtube.com/embed' + videoId;
  const url = `https://www.youtube.com/embed${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  )
}

export default VideoDetail;
