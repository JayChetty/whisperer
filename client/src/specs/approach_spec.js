var Approach = require('../models/approach');
var expect = require('chai').expect;
var sinon = require('sinon');

describe('approach', function(){
  it('should trigger a step even', function(){
    var mockGameStore = {
      dispatch:sinon.spy()
    };
    var stubDiceScores = [4,6];
    var approach = new Approach(mockGameStore);
    approach.attemptStep(stubDiceScores);
    expect(mockGameStore.dispatch.calledWith({type:'APPROACH_STEP'})).to.be.true
  });
  it('should scare chickens if odd', function(){
    var mockGameStore = {
      dispatch:sinon.spy()
    };
    var stubDiceScores = [3,6];
    var approach = new Approach(mockGameStore);
    approach.attemptStep(stubDiceScores);
    expect(mockGameStore.dispatch.calledWith({type:'SCARE_CHICKENS'})).to.be.true
  });
  it('should steal chicken if total dice score greater equal than chicken speed', function(){
    var mockGameStore = {
      dispatch:sinon.spy()
    };
    var mockChicken = {
      id:1,
      speed: 5
    }
    var stubDiceScores = [3,6];
    var approach = new Approach(mockGameStore);
    approach.attemptSteal(stubDiceScores, mockChicken);
    expect(mockGameStore.dispatch.calledWith(
      {type:'STEAL_CHICKEN',
       chickenId: mockChicken.id
      }
    )
    ).to.be.true
  })
  it('should NOT steal chicken if total dice score less than chicken speed', function(){
    var mockGameStore = {
      dispatch:sinon.spy()
    };
    var mockChicken = {
      id:1,
      speed: 15
    }
    var stubDiceScores = [3,6];
    var approach = new Approach(mockGameStore);
    approach.attemptSteal(stubDiceScores, mockChicken);
    expect(mockGameStore.dispatch.calledWith(
      {type:'STEAL_CHICKEN',
       chickenId: null
      }
    )
    ).to.be.true
  })
})
