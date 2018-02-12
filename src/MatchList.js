import React, { Component } from 'react';
import Match from './Match.js';

class MatchList extends Component {
  render() {
    const json = [{"key":0,"league":"B1","date":"2018-01-27","hometeam":"Genk","homescore":"1","awayteam":"St Truiden","awayscore":"1"},{"key":1,"league":"B1","date":"2018-01-21","hometeam":"Genk","homescore":"0","awayteam":"Anderlecht","awayscore":"1"},{"key":2,"league":"B1","date":"2017-12-23","hometeam":"Genk","homescore":"2","awayteam":"Kortrijk","awayscore":"3"},{"key":3,"league":"B1","date":"2017-12-09","hometeam":"Genk","homescore":"1","awayteam":"Eupen","awayscore":"1"},{"key":4,"league":"B1","date":"2017-11-26","hometeam":"Genk","homescore":"0","awayteam":"Standard","awayscore":"2"}];

    var arr = [];
    Object.keys(json).forEach(function(key) {
      arr.push(json[key]);
    });

    return <div>{arr.map(item => <Match key={item.key} hometeam={item.hometeam} homescore={item.homescore} awayteam={item.awayteam} awayscore={item.awayscore} />)}</div>;
  }
}

export default MatchList;