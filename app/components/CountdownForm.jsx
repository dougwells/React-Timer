var React = require('react');

var CountdownForm = React.createClass({

  onFormSubmit: function(event){
    event.preventDefault();
    var strSeconds = this.refs.totalSeconds.value;
    if(strSeconds.match(/^[0-9]*$/)){
      var totalSeconds = parseInt(strSeconds,10);
      this.props.onSubmit(totalSeconds);
      this.refs.totalSeconds.value = "";
    }

  },

  render: function(){
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="countdown-form">
          <input type="text" ref="totalSeconds" placeholder="Total Seconds"/>
          <input type="submit" placeholder="Start" className="button expanded"/>
        </form>
      </div>
    )
  }
});

module.exports = CountdownForm
