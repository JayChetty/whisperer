
var createStepAction = require('../../action_creators/create_step_action');
var expect = require('chai').expect;
var sinon = require('sinon');

describe('create step action', function(){
  it('should create APPROACH_STEP when success', function(){
    expect(createStepAction(true)).to.deep.equal({type:'APPROACH_STEP'});
  });
  it('should create SCARE_CHICKENS when failure', function(){
    expect(createStepAction(false)).to.deep.equal({type:'SCARE_CHICKENS'});
  });
})
