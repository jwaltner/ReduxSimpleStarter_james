// needed for JSX components
// Note that the `, {Component}` allows us to drop the "React." when we extend
// React.Component since we are pulling in the Component from the react module.
import React, { Component } from 'react';

// // This is a functional component.
// const SearchBar = () => {
//   return <input />;
// };

// Since we did `import React, {Component} from 'react'`, we can drop the React.
// in front of Component
//class SearchBar extends React.Component {
class SearchBar extends Component {

  // class components have constructors
  constructor(props) {
    super(props);

    // here we are initializing a state variable 'term'
    // only manually set state in the constructor.  Otherwise use this.setState()
    this.state = { term: 'enter text' };
  }

  // each class object which displays anything needs a render function
  // the render function returns what the component's content is
  render() {
    // we can use an arrow function to clean up and write less code.
    // return <input onChange={this.onInputChange}/>;
    // return <input onChange={(event) => console.log(event.target.value)}/>;

    // return (
    //   <div>
    //     <input onChange={(event) => this.setState({ term: event.target.value})}/>
    //     <br/>{this.state.term}
    //   </div>
    // );

    // when we set the value of the item to {this.state.term}, we turn this into
    // a controlled component which is rendered whenever it's state changes.
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={(event) => this.onInputChange(event.target.value)}
        />
        <br/>{this.state.term}
      </div>
    );

  }

  // onInputChange() is local to this class.
  // onSearchTermChange is the call-back which is passed to this Component
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  // // event is not a reserved word, it is just what is passed by onChange
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
}

export default SearchBar;
