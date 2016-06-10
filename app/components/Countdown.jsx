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
    setInterval(this.startCountdown, 1000)
  },

  startCountdown: function(){
    var startSeconds = this.state.totalSeconds;
    console.log(startSeconds);
    if(startSeconds>0){
      this.setState({totalSeconds: startSeconds-1})
    }else{
      this.setState({totalSeconds:0});
    }
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
