import React, { Component, Fragment } from 'react';
import './App.css';
import community from '../components/community';

class App extends Component {
  constructor() {
    super();
    this.status = {
      comm: "",
      threads: []
    }
  }

  onClick = (event) => {
    this.setState({comm: event.target.id});
  }

  render() {
    if (true) {
      return (
        <Fragment>
          <community click={this.onClick} />
        </Fragment>
      );
    }
    else {
      
    }
  }
}

export default App;
