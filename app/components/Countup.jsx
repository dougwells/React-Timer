var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countup = React.createClass({

  getInitialState: function(){
    return{
      countupStatus: "stopped",
      count:0
    }
  },

  handleStatusChange: function(newStatus){
      this.setState({countupStatus: newStatus});
      if(newStatus === "started"){this.startCounter();}
      if(newStatus === "paused"){clearInterval(this.counter)}
      if(newStatus === "stopped"){
        clearInterval(this.counter);
        this.setState({count:0})
      }
  },

  startCounter: function () {
    this.counter = setInterval(() => {
      this.setState({count: this.state.count + 1});
    }, 1000);
  },

  componentWillUnmount: function () {
    clearInterval(this.counter);
    this.counter = undefined;
  },

  render: function(){
    return (
      <div>
        <h1 className="page-title">Count Up</h1>
        <Clock totalSeconds={this.state.count}/>
        <Controls onStatusChange={this.handleStatusChange} countdownStatus={this.state.countupStatus}/>

      </div>
    );
  }

});

module.exports = Countup;
