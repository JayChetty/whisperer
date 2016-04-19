var Race = require('../models/race');
var expect = require('chai').expect;
var sinon = require('sinon');

describe('race', function(){
  it('should increase race step if even', function(){
    var mockGameStore = {
      dispatch:sinon.spy()
    };
    var stubDiceScores = [4,6];
    var race = new Race(mockGameStore);
    race.attemptRaceStep(stubDiceScores);
    expect(mockGameStore.dispatch.calledWith({type:'INCREASE_RACING_CHICKEN_STEPS'})).to.be.true
  });

  it('should go to next chicken when race step', function(){
    var mockGameStore = {
      dispatch:sinon.spy()
    };
    var stubDiceScores = [4,6];
    var race = new Race(mockGameStore);
    race.attemptRaceStep(stubDiceScores);
    expect(mockGameStore.dispatch.calledWith({type:'SHIFT_RACING_CHICKEN_INDEX'})).to.be.true
  });

  it('should go to next chicken when race odd', function(){
    var mockGameStore = {
      dispatch:sinon.spy()
    };
    var stubDiceScores = [5,6];
    var race = new Race(mockGameStore);
    race.attemptRaceStep(stubDiceScores);
    expect(mockGameStore.dispatch.calledWith({type:'SHIFT_RACING_CHICKEN_INDEX'})).to.be.true
  });

})
