
var createStepAction = require('../../action_creators/create_race_action');
var expect = require('chai').expect;
var sinon = require('sinon');

describe('create step action', function(){
  it('should create INCREASE_RACING_CHICKEN_STEPS when success', function(){
    expect(createStepAction(true)).to.deep.equal({type:'INCREASE_RACING_CHICKEN_STEPS'});
  });
  it('should create SHIFT_RACING_CHICKEN_INDEX when failure', function(){
    expect(createStepAction(false)).to.deep.equal({type:'SHIFT_RACING_CHICKEN_INDEX'});
  });
})
