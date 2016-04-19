var StandardChecker = require('../models/standard_checker');
var expect = require('chai').expect;
var sinon = require('sinon');

describe('standard checker', function(){
  it('should trigger a step when even', function(){
    var standardChecker = new StandardChecker();
    var stubDiceScores = [4,6];
    expect(standardChecker.shouldStep(stubDiceScores)).to.be.true
  });
  it('should not trigger a step when odd', function(){
    var standardChecker = new StandardChecker();
    var stubDiceScores = [3,6];
    expect(standardChecker.shouldStep(stubDiceScores)).to.be.false
  });
  it('should steal chicken if total dice score greater equal than chicken speed times multiplier(6)', function(){
    var standardChecker = new StandardChecker();
    var stubDiceScores = [3,6];
    var mockChicken = {
      id:1,
      speed: 1
    }
    expect(standardChecker.shouldSteal(stubDiceScores,mockChicken)).to.be.true
  })
  it('should not steal chicken if total dice score greater equal than chicken speed times multiplier(6)', function(){
    var standardChecker = new StandardChecker();
    var stubDiceScores = [3,6];
    var mockChicken = {
      id:1,
      speed: 2
    }
    expect(standardChecker.shouldSteal(stubDiceScores,mockChicken)).to.be.false
  })
})
