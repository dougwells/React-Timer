var React = require('react');
var Clock = require('Clock');

var Countdown = React.createClass({
  render: function(){
    return (
      <div>
        <h2>Countdown Rendered ...</h2>
        <Clock totalSeconds={62}/>
      </div>
    );
  }
});

module.exports = Countdown;
