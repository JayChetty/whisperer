var WhispererChecker = require('../models/whisperer_checker');
var expect = require('chai').expect;
var sinon = require('sinon');

describe('whisperer checker', function(){
  it('should trigger a step when no ones', function(){
    var whispererChecker = new WhispererChecker();
    var stubDiceScores = [4,5];
    expect(whispererChecker.shouldStep(stubDiceScores)).to.be.true
  });
  it('should not trigger a step when includes one', function(){
    var whispererChecker = new WhispererChecker();
    var stubDiceScores = [1,6];
    expect(whispererChecker.shouldStep(stubDiceScores)).to.be.false
  });
  it('should steal chicken if total dice score greater equal than chicken speed times multiplier(6)', function(){
    var whispererChecker = new WhispererChecker();
    var stubDiceScores = [3,6];
    var mockChicken = {
      id:1,
      speed: 1
    }
    expect(whispererChecker.shouldSteal(stubDiceScores,mockChicken)).to.be.true
  })
  it('should not steal chicken if total dice score greater equal than chicken speed times multiplier(6)', function(){
    var whispererChecker = new WhispererChecker();
    var stubDiceScores = [3,6];
    var mockChicken = {
      id:1,
      speed: 2
    }
    expect(whispererChecker.shouldSteal(stubDiceScores,mockChicken)).to.be.false
  })
})
