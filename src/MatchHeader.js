import React, { Component } from 'react';

class MatchHeader extends Component {
  render() {
    return (
      <div className="row">
          <div className="col-12">Last {this.props.count} {this.props.label} games for {this.props.team}</div>
      </div>
    );
  }
}

export default MatchHeader;
