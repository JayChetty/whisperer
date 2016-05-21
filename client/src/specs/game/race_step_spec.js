var raceStep = require('../../game/race_move_success');
var expect = require('chai').expect;
var sinon = require('sinon');

describe('attempt step', function(){
  it('should succeed if rolls an even', function(){
    var dice = [2,4];
    expect(raceStep(dice)).to.be.true
  });
  it('should not succeed if rolls an odd', function(){
    var dice = [1,2];
    expect(raceStep(dice)).to.be.false
  });
})
