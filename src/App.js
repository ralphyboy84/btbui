import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MatchList from './MatchList.js';
import MatchLabel from './MatchLabel.js';
import MatchHeader from './MatchHeader.js';
import FixtureList from './FixtureList.js';
import CustomModal from './CustomModal.js';

class App extends Component {
  render() {
    return (
      <div className="container">
        <FixtureList />
        <MatchHeader count="2" label="home" team="Rangers" />
        <MatchList />
        <MatchLabel scored="2" conceded="8" />
        <CustomModal />
      </div>
    );
  }
}

export default App;