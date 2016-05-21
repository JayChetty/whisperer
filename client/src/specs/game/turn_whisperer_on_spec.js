var turnWhispererOn = require('../../game/turn_whisperer_on');
var expect = require('chai').expect;
var sinon = require('sinon');

describe('turn whisperer on', function(){
  it('should succed when there is a double', function(){
    var dice = [2,2];
    expect(turnWhispererOn(dice)).to.be.true
  });
  it('should fail when different numbers', function(){
    var dice = [1,2];
    expect(turnWhispererOn(dice)).to.be.false
  });
})
