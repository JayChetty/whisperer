var expect  = require('chai').expect
var catchGame = require('../reducers/catch_game_reducer')

var startState = {
  catchers:[{ id:1, name:'Jay' },{ id:2, name:'Valerie' }],
  chickens:[
    { id:1,
      name:'QuickChick',
      speed:15,
      scare:1,
      startScare:1,
      owner:null,
      raceSteps:0
    },
    {
      id:2,
      name:'SlowChick',
      speed:5,
      scare:4,
      startScare:4,
      owner:null,
      raceSteps:0
    }
  ],
  currentApproach:null,
  racingChickenIndex:null,
}


var stateWithApproach = Object.assign( {}, startState, {currentApproach:{catcher: 1, steps: 0, finished:false}} )
var stateWithFinishedApproach = Object.assign( {}, startState, {currentApproach:{catcher: 1, steps: 0, finished:true}} )
var stateWithFinishedApproachLast = Object.assign( {}, startState, {currentApproach:{catcher: 2, steps: 0, finished:true}} )

var stateInRace = Object.assign( {}, startState, {racingChickenIndex:0} );

var stateLastChickenInRace = Object.assign( {}, startState, {racingChickenIndex:startState.chickens.length - 1} );

Object.freeze(startState);
Object.freeze(stateWithApproach);

describe("catch game reducer", function(){
  it('should produce an approach', function(){
    var action = {
      type:'NEXT_APPROACH',
    }
    var expectedApproach = {catcher: 1, steps: 0}
    expect(catchGame(startState, action).currentApproach).to.deep.equal({catcher: 1, steps: 0,finished:false} );
  });
  it('should not produce an approach if approach not finished', function(){
    var action = {
      type:'NEXT_APPROACH',
      catcher:2
    }
    var expectedApproach = {catcher: 1, steps: 0, finished:false}
    expect(catchGame(stateWithApproach, action).currentApproach).to.deep.equal(expectedApproach);
  });
  it('should assign next user to the next approach', function(){
    var action = {
      type:'NEXT_APPROACH',
      catcher:2
    }
    var expectedApproach = {catcher: 2, steps: 0, finished:false}
    expect(catchGame(stateWithFinishedApproach, action).currentApproach).to.deep.equal(expectedApproach);
  });
  it('should cycle back to first user when last done', function(){
    var action = {
      type:'NEXT_APPROACH',
      catcher:2
    }
    var expectedApproach = {catcher: 1, steps: 0, finished:false}
    expect(catchGame(stateWithFinishedApproachLast, action).currentApproach).to.deep.equal(expectedApproach);
  });
  it('should be able to take step', function(){
    var action = {
      type:'APPROACH_STEP',
    }
    var expectedApproach = {catcher: 1, steps: 1, finished:false}
    expect(catchGame(stateWithApproach, action).currentApproach).to.deep.equal(expectedApproach);
  });
  it('should be able to scare chickens', function(){
    var action = {
      type:'SCARE_CHICKENS',
    }
    var scaredChickens = [
      { id:1,
        name:'QuickChick',
        speed:15,
        scare:0,
        startScare:1,
        owner:null,
        raceSteps:0
      },
      {
        id:2,
        name:'SlowChick',
        speed:5,
        scare:3,
        startScare:4,
        owner:null,
        raceSteps:0
      }
    ]
    expect(catchGame(stateWithApproach, action).chickens).to.deep.equal(scaredChickens);
  });
  it('should be able steal chicken', function(){
    var action = {
      type:'STEAL_CHICKEN',
      chickenId:1
    }
    var chickensAfterSteal = [
      { id:1,
        name:'QuickChick',
        speed:15,
        scare:1,
        startScare:1,
        owner:1,
        raceSteps:0
      },
      {
        id:2,
        name:'SlowChick',
        speed:5,
        scare:4,
        startScare:4,
        owner:null,
        raceSteps:0
      }
    ]
    expect(catchGame(stateWithApproach, action).chickens).to.deep.equal(chickensAfterSteal);
  });
  it('stealing a chicken should end approach', function(){
    var action = {
      type:'STEAL_CHICKEN',
      chickenId:1
    }
    expect(catchGame(stateWithApproach, action).currentApproach.finished).to.equal(true);
  });
  it('should be able to set the last dice roll', function(){
    var action = {
      type:'SET_LAST_ROLL',
      dice:[1,2,3]
    }
    expect(catchGame(startState, action).dice).to.deep.equal([1,2,3]);
  });

  it('should default to zero when shifting racing index ', function(){
    var action = {
      type:'SHIFT_RACING_CHICKEN_INDEX',
    }
    expect(catchGame(startState, action).racingChickenIndex).to.equal(0);
  });

  it('should shift to next chickens ', function(){
    var action = {
      type:'SHIFT_RACING_CHICKEN_INDEX',
    }
    expect(catchGame(stateInRace, action).racingChickenIndex).to.equal(1);
  });
  it('should loop index back to first chicken', function(){
    var action = {
      type:'SHIFT_RACING_CHICKEN_INDEX',
    }
    expect(catchGame(stateLastChickenInRace, action).racingChickenIndex).to.equal(0);
  });

  it('should be able increase racing chicken race steps', function(){
    var action = {
      type:'INCREASE_RACING_CHICKEN_STEPS',
    }
    var chickensAfterRace = [
      { id:1,
        name:'QuickChick',
        speed:15,
        scare:1,
        startScare:1,
        owner:null,
        raceSteps:15
      },
      {
        id:2,
        name:'SlowChick',
        speed:5,
        scare:4,
        startScare:4,
        owner:null,
        raceSteps:0
      }
    ]
    expect(catchGame(stateInRace, action).chickens).to.deep.equal(chickensAfterRace);
  });

  it('should set approach as whisperer ', function(){
    var action = {
      type:'SET_WHISPERER_ON',
    }
    expect(catchGame(stateWithApproach, action).currentApproach.isWhisperer).to.equal(true);
  });

  it('should set approach as not whisperer ', function(){
    var action = {
      type:'SET_WHISPERER_OFF',
    }
    expect(catchGame(stateWithApproach, action).currentApproach.isWhisperer).to.equal(false);
  });

})
