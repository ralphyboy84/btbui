import React, { Component } from 'react';

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
    console.log(test);
  }

  render() {
    return (
      <div className="row" onClick={this.loadPopUp}>
        <div className="col-2">Game {this.props.matchnum}</div>
        <div className="col-2">{this.props.date}</div>
        <div className="col-2">{this.props.league}</div>
        <div className="col-2">{this.props.hometeam} vs {this.props.awayteam}</div>
        <div className="col-2">Points Difference - {this.props.ptsdiff}</div>
        <div className="col-2">Goals - {this.props.goals}</div>
      </div>
    );
  }
}

export default Fixture;