var attemptStepWhisperer = require('../../game/attempt_step_whisperer');
var expect = require('chai').expect;
var sinon = require('sinon');

describe('attempt step', function(){
  it('should succeed doesnt roll a 1', function(){
    var dice = [3,4];
    expect(attemptStepWhisperer(dice)).to.be.true
  });
  it('should not succeed if rolls a 1', function(){
    var dice = [1,2];
    expect(attemptStepWhisperer(dice)).to.be.false
  });
})
