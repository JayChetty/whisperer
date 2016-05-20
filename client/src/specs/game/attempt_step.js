var attemptStep = require('../../game/attempt_step');
var expect = require('chai').expect;
var sinon = require('sinon');

describe('step sucess', function(){
  it('should succeed if rolls an even', function(){
    var dice = [2,4];
    expect(attemptStep(dice)).to.be.true
  });
  it('should not succeed if rolls an odd', function(){
    var dice = [1,2];
    expect(attemptStep(dice)).to.be.false
  });
})
