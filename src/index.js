// note the lack of paretheses
// create a variable React by importing it from 'react';
import React from 'react';
// to render to the webpage / DOM, we need to use ReactDOM since React and ReactDOM
// have now diverged.
import ReactDOM from 'react-dom';

// create a new component.
// this component should create some html
// const is ES6
// App is like a class, it is not an instance... to deploy it to the DOM, we need
//     to create an instance.  We do that by wrapping it in <> like so: <App /> or <App></App>
//const App = function() {
// This is react syntax... don't need to write "function()"... this is shorter syntax
const App = () => {
  // This is JSX... webpack and bable translates this JSX into javascript for us.
  // JSX can not be compiled...
  return <div>Hi!</div>;
}

// take this component's HTML and put it on the page (in the DOM)
// Need to wrap the class in HTML tags to turn it into an instance.
// .render(<theComponent />, {where to render to.})
// need to
ReactDOM.render(
  <App />,                              // The instance to render
  document.querySelector('.container')  // where to render it to
);
