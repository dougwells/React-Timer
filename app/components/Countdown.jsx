var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({

  getInitialState: function(){
    return {
      totalSeconds: 582
    }
  },

  handleSubmit: function(totalSeconds){
    this.setState({totalSeconds:totalSeconds});
  },

  render: function(){
    return (
      <div>
        <Clock totalSeconds={this.state.totalSeconds}/>
        <CountdownForm onSubmit={this.handleSubmit}/>
      </div>
    );
  }
});

module.exports = Countdown;
