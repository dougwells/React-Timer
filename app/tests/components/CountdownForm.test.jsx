var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', function(){

  it('should exist', function(){
    expect(CountdownForm).toExist();
  });

  it('should call onSubmit if valid number in CountdownForm', function(){
    var spy = expect.createSpy();

    //insert "spy" into onSubmit function
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSubmit={spy}/>);
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.totalSeconds.value = '109';
    //simulate form submit by selecting first child [0] form returned by jQ
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toHaveBeenCalledWith(109);
  });

  it('should not be called onSubmit if invalid number in CountdownForm', function(){
    var spy = expect.createSpy();

    //insert "spy" into onSubmit function
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSubmit={spy}/>);
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.totalSeconds.value = 'abc';
    //simulate form submit by selecting first child [0] form returned by jQ
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toNotHaveBeenCalled();
  });

});
