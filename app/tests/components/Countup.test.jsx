var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countup = require('Countup');

describe('Countup', () => {
  it('should exist', () => {
    expect(Countup).toExist();
  });

  it('should count up time on start', (done)=>{
    var countup = TestUtils.renderIntoDocument(<Countup/>);
    countup.handleStatusChange("started");
    setTimeout(()=>{
      expect(countup.state.count).toBe(3);
      done();
    },3001)
  });

  it('should pause timer on pause', (done)=>{
    var countup = TestUtils.renderIntoDocument(<Countup/>);
    countup.handleStatusChange("paused");
    setTimeout(()=>{
      expect(countup.state.count).toBe(0);
      done();
    },1001)
  });

  it('should clear time display on clear', ()=>{
    var countup = TestUtils.renderIntoDocument(<Countup/>);
    countup.handleStatusChange("stopped");
      expect(countup.state.count).toBe(0);
  });

});
