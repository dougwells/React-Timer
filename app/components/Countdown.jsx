var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require("Controls")

var Countdown = React.createClass({

  getInitialState: function(){
    return {
      totalSeconds: 582,
      countdownStatus: "paused"
    }
  },

  handleSubmit: function(totalSeconds){
    this.setState({totalSeconds:totalSeconds, countdownStatus:"started"});
    setInterval(this.startCountdown, 1000)
  },

  startCountdown: function(){
    var startSeconds = this.state.totalSeconds;
    console.log(startSeconds);
    if(startSeconds>0){
      this.setState({totalSeconds: startSeconds-1})
    }else{
      this.setState({totalSeconds:0, countdownStatus:"stopped"});
    }
  },

  render: function(){
    return (
      <div>
        <Clock totalSeconds={this.state.totalSeconds}/>
        <CountdownForm onSubmit={this.handleSubmit}/>
        <Controls countdownStatus = {this.state.countdownStatus} />
      </div>
    );
  }
});

module.exports = Countdown;
