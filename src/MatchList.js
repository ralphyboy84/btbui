import React, { Component } from 'react';
import Match from './Match.js';
import $ from 'jquery';
import MatchLabel from './MatchLabel.js';

class MatchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    const fixtureid = this.props.fixtureid;

    $.ajax({
      type: "GET",
      url: "http://localhost/btbv2/jsonsources/form.php?fixtureid="+fixtureid+"&dataset="+this.props.dataset,
      dataType: 'json',
      xhrFields: {
          withCredentials: false
      },
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {

      }.bind(this)
    });
  }

  render() {
    if (this.state.data) {
      var json = this.state.data;

      var teama = 0;
      var teamb = 0;

      var team = this.props.team;
      var otherteam = this.props.otherteam;

      var arr = [];
      Object.keys(json).forEach(function(key) {
        arr.push(json[key]);

        if (team == json[key].hometeam) {
          teama = (json[key].homescore*1) + teama;
          teamb = (json[key].awayscore*1) + teamb;
        } else if (team == json[key].awayteam) {
          teama = (json[key].awayscore*1) + teama;
          teamb = (json[key].homescore*1) + teamb;
        }
      });

      return <div>
        {arr.map(item => <Match test={this.props.fixtureid} key={item.key} hometeam={item.hometeam} homescore={item.homescore} awayteam={item.awayteam} awayscore={item.awayscore} />)}
        <MatchLabel scored={teama} conceded={teamb} />  
      </div>;
    } else {
      return <div></div>;
    }
  }
}

export default MatchList;