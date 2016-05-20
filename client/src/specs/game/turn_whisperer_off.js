var turnWhispererOff = require('../../game/turn_whisperer_off');
var expect = require('chai').expect;
var sinon = require('sinon');

describe('turn whisperer off', function(){
  it('should turn off when there is a one', function(){
    var dice = [1,2];
    expect(turnWhispererOff(dice)).to.be.true
  });
  it('should not there is not a one', function(){
    var dice = [4,2];
    expect(turnWhispererOff(dice)).to.be.false
  });
})
