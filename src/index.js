// note the lack of paretheses
// create a variable React by importing it from 'react';
import React, { Component } from 'react';
// to render to the webpage / DOM, we need to use ReactDOM since React and ReactDOM
// have now diverged.
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// import the SearchBar which was exported from search_bar.js
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail.js';

// YouTube API Key.
// This requires the youtubeapisearch
// npm install --save youtube-api-search
const API_KEY = 'AIzaSyA00eNJwxbmApmlzkhKjiXEE7B0gVdoQ7o';

// create a new component.
// this component should create some html
// const is ES6
// App is like a class, it is not an instance... to deploy it to the DOM, we need
//     to create an instance.  We do that by wrapping it in <> like so: <App /> or <App></App>
//const App = function() {
// This is react syntax... don't need to write "function()"... this is shorter syntax
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
      , selectedVideo: null
    };

    // YTSearch({key: API_KEY, term: 'surfboards'}, function(videos) => {
    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      // if we are assigning a value of a variable to a state
      // and the names match, with ES6, we can shorten it and just
      // list the name.
      // this.setState({ videos: videos });
      // this.setState({ videos });
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      // console.log(data);
    });
  }

  // This is JSX... webpack and bable translates this JSX into javascript for us.
  // JSX can not be compiled...
  render() {
    // we need to pass props / properties to VideoList
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

// take this component's HTML and put it on the page (in the DOM)
// Need to wrap the class in HTML tags to turn it into an instance.
// .render(<theComponent />, {where to render to.})
// need to
ReactDOM.render(
  <App />,                              // The instance to render
  document.querySelector('.container')  // where to render it to
);
