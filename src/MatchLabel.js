import React, { Component } from 'react';

class MatchLabel extends Component {
  render() {
    return (
      <div className="row">
          <div className="col-12">Scored {this.props.scored} - Conceded {this.props.conceded}</div>
      </div>
    );
  }
}

export default MatchLabel;
