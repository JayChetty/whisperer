var Approach = require('../models/approach');
var expect = require('chai').expect;
var sinon = require('sinon');

describe('approach', function(){
  it('should trigger a step', function(){
    var mockGameStore = {
      dispatch:sinon.spy()
    };
    var stubChecker = {
      shouldStep: function(diceRoll){
        return true;
      }
    };
    var stubDiceScores = [4,6];
    var approach = new Approach(mockGameStore, stubChecker);
    approach.attemptStep(stubDiceScores);
    expect(mockGameStore.dispatch.calledWith({type:'APPROACH_STEP'})).to.be.true
  });
  it('should scare chickens if fails step', function(){
    var mockGameStore = {
      dispatch:sinon.spy()
    };
    var stubChecker = {
      shouldStep: function(diceRoll){
        return false;
      }
    };
    var stubDiceScores = [4,6];
    var approach = new Approach(mockGameStore, stubChecker);
    approach.attemptStep(stubDiceScores);
    expect(mockGameStore.dispatch.calledWith({type:'SCARE_CHICKENS'})).to.be.true
  });

  it('should steal chicken if checker passes)', function(){
    var mockGameStore = {
      dispatch:sinon.spy()
    };
    var mockChicken = {
      id:1,
      speed: 1
    }
    var stubChecker = {
      shouldSteal: function(diceRoll){
        return true;
      }
    };
    var stubDiceScores = [3,6];
    var approach = new Approach(mockGameStore, stubChecker);
    approach.attemptSteal(stubDiceScores, mockChicken);
    expect(mockGameStore.dispatch.calledWith(
      {type:'STEAL_CHICKEN',
       chickenId: mockChicken.id
      }
    )
    ).to.be.true
  })
  it('should NOT steal chicken if total dice score less than chicken speed times multiplier(6)', function(){
    var mockGameStore = {
      dispatch:sinon.spy()
    };
    var mockChicken = {
      id:1,
      speed: 2
    };
    var stubChecker = {
      shouldSteal: function(diceRoll){
        return false;
      }
    };
    var stubDiceScores = [3,6];
    var approach = new Approach(mockGameStore, stubChecker);
    approach.attemptSteal(stubDiceScores, mockChicken);
    expect(mockGameStore.dispatch.calledWith(
      {type:'STEAL_CHICKEN',
       chickenId: null
      }
    )
    ).to.be.true
  })
  it('should trigger whisperer double is rolled on step', function(){
    var mockGameStore = {
      dispatch:sinon.spy()
    };
    var mockChicken = {
      id:1,
      speed: 2
    };
    var stubChecker = {
      shouldStep: function(diceRoll){
        return true;
      }
    };
    var stubDiceScores = [5,5];
    var approach = new Approach(mockGameStore, stubChecker);
    approach.attemptStep(stubDiceScores, mockChicken);
    expect(mockGameStore.dispatch.calledWith(
      {type:'SET_WHISPERER_ON'}
    )).to.be.true
  });
  it('should stil step if whisperer triggered', function(){
    var mockGameStore = {
      dispatch:sinon.spy()
    };
    var mockChicken = {
      id:1,
      speed: 2
    };
    var stubChecker = {
      shouldStep: function(diceRoll){
        return true;
      }
    };
    var stubDiceScores = [5,5];
    var approach = new Approach(mockGameStore, stubChecker);
    approach.attemptStep(stubDiceScores, mockChicken);
    expect(mockGameStore.dispatch.calledWith(
      {type:'APPROACH_STEP'}
    )).to.be.true
  })

  it('should void whisperer if shouldnt step', function(){
    var mockGameStore = {
      dispatch:sinon.spy()
    };
    var mockChicken = {
      id:1,
      speed: 2
    };
    var stubChecker = {
      shouldStep: function(diceRoll){
        return false;
      }
    };
    var stubDiceScores = [1,3];
    var approach = new Approach(mockGameStore, stubChecker, true);
    approach.attemptStep(stubDiceScores, mockChicken);
    expect(mockGameStore.dispatch.calledWith(
      {type:'SET_WHISPERER_OFF'}
    )).to.be.true
  });
  it('should scare when voiding whisperer', function(){
    var mockGameStore = {
      dispatch:sinon.spy()
    };
    var mockChicken = {
      id:1,
      speed: 2
    };
    var stubChecker = {
      shouldStep: function(diceRoll){
        return false;
      }
    };
    var stubDiceScores = [1,3];
    var approach = new Approach(mockGameStore, stubChecker, true);

    approach.attemptStep(stubDiceScores, mockChicken);
    expect(mockGameStore.dispatch.calledWith(
      {type:'SCARE_CHICKENS'}
    )).to.be.true
  })

})
