import React, { Component } from 'react';

class Match extends Component {
  render() {
    return (
      <div className="row">
          <div className="col-4">{this.props.hometeam}</div>
          <div className="col-2">{this.props.homescore}</div>
          <div className="col-2">{this.props.awayscore}</div>
          <div className="col-4">{this.props.awayteam}</div>
      </div>
    );
  }
}

export default Match;
