var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', function(){

  it('should exist', function(){
    expect(Countdown).toExist();
  });

  it('should setState and start Counting', function(done){
    var countdown = TestUtils.renderIntoDocument(<Countdown/>);
    countdown.handleSubmit(10)
    expect(countdown.state.totalSeconds).toBe(10);

    setTimeout(function(){
      expect(countdown.state.totalSeconds).toBe(9);
      done();
    }, 1001);

  });

  it('should not go negative', function(done){
    var countdown = TestUtils.renderIntoDocument(<Countdown/>);
    countdown.handleSubmit(1)
    expect(countdown.state.totalSeconds).toBe(1);

    setTimeout(function(){
      expect(countdown.state.totalSeconds).toBe(0);
      done();
    }, 3001);

  });

});
