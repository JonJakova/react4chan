import React, { Component, Fragment } from 'react';
import './App.css';
import CommunityListDisplayer from '../components/CommunityListDisplayer';
import { CommunityList } from '../components/CommunityList';
import {Random} from '../components/Threads/Random';
import ThreadList from '../threadList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      threads: [],
      comm: ''
    }
  }

  onClick = (event) => {
    const threadsFromJSON = Random;
    console.log(threadsFromJSON);
    
    this.setState(
      { comm: event.target.id,
      threads: threadsFromJSON}
    );
  }

  render() {
    const { threads } = this.state;
    if (threads.length !== 0) {
      return (
        <Fragment>
          <CommunityListDisplayer list={CommunityList} click={this.onClick}/>
          <ThreadList threadL={threads} />
        </Fragment>
      );
    }
    else {
      return (
        <Fragment>
          <CommunityListDisplayer list={CommunityList} click={this.onClick} />
        </Fragment>
      );
    }
  }
}

export default App;