var attemptSteal = require('../../game/attempt_steal');
var expect = require('chai').expect;
var sinon = require('sinon');

describe('steal sucess', function(){
  it('should steal if total is greater than chicken speed', function(){
    const dice = [2,8];
    const chickenSpeed = 5;
    expect(attemptSteal(chickenSpeed, dice)).to.be.true
  });
  it('should not succeed if less then chicken speed', function(){
    const dice = [1,2];
    const chickenSpeed = 12;
    expect(attemptSteal(chickenSpeed, dice)).to.be.false
  });
})
