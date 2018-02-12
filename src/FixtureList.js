import React, { Component } from 'react';
import Fixture from './Fixture.js';
import $ from 'jquery'; 

class FixtureList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    $.ajax({
      type: "GET",
      url: "http://localhost/btbv2/jsonsources/fixtures.php",
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
      var arr = [];
      Object.keys(json).forEach(function(key) {
        arr.push(json[key]);
      });

      return <div>{arr.map(item => <Fixture key={item.fixtureid} matchnum={item.fixtureid} date={item.date} league={item.league} hometeam={item.hometeam} awayteam={item.awayteam}  ptsdiff={item.pointsdiff} goals={item.goals} />)}</div>;
    } else {
      return <div></div>;
    }
  }
}

export default FixtureList;