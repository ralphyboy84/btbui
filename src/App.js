import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FixtureList from './FixtureList.js';

class App extends Component {
  render() {
    return (
      <div className="container">
        <FixtureList />
      </div>
    );
  }
}

export default App;