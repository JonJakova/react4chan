import React, { Component, Fragment } from 'react';
import './App.css';
import CommunityListDisplayer from '../components/CommunityListDisplayer';
import { CommunityList } from '../components/CommunityList';
import {threadDatabase} from '../components/threadDatabase';
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
    const targetValue = event.target.id;
    this.setState(
      { comm: targetValue,
        threads: threadDatabase[targetValue]}
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