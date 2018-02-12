import React, { Component } from 'react';
import CustomModal from './CustomModal.js';

class Fixture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixtureid: props.matchnum
    };

    this.loadPopUp = this.loadPopUp.bind(this);
  }

  loadPopUp() {
    const test = this.props.matchnum;
  }

  render() {
    return (
      <div className="row" onClick={this.loadPopUp}>
        <div className="col-2">Game {this.props.matchnum}</div>
        <div className="col-2">{this.props.date}</div>
        <div className="col-2">{this.props.league}</div>
        <div className="col-2">{this.props.hometeam} vs {this.props.awayteam}</div>
        <div className="col-1">Points Difference - {this.props.ptsdiff}</div>
        <div className="col-1">Goals - {this.props.goals}</div>
        <div className="col-2"><CustomModal fixtureid={this.props.matchnum} hometeam={this.props.hometeam} awayteam={this.props.awayteam} /></div>
      </div>
    );
  }
}

export default Fixture;