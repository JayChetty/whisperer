import {expect} from 'chai'
import chickenReducer from '../../reducers/chicken_reducer';

const startState = {
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
  racingChickenIndex:null,
}
// const stateWithApproach = Object.assign( {}, startState, {currentApproach:{catcher: 1, steps: 0, finished:false}} )
const stateInRace = Object.assign( {}, startState, {racingChickenIndex:0} );
const stateLastChickenInRace = Object.assign( {}, startState, {racingChickenIndex:startState.chickens.length - 1} );


Object.freeze(startState);
// Object.freeze(stateWithApproach);

describe("chicken reducer", function(){

  it('should remove a scare from each chicken when scared', function(){
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
    expect(chickenReducer(startState, action).chickens).to.deep.equal(scaredChickens);
  });

  it('should be able steal chicken', function(){
    var action = {
      type:'STEAL_CHICKEN',
      chickenId:1,
      catcherId:1
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
    expect(chickenReducer(startState, action).chickens).to.deep.equal(chickensAfterSteal);
  });
  it('stealing a chicken should end approach', function(){
    var action = {
      type:'STEAL_CHICKEN',
      chickenId:1,
      catcherId:1
    }
    expect(chickenReducer(startState, action).currentApproach.finished).to.equal(true);
  });

  it('should default to zero when shifting racing index ', function(){
    var action = {
      type:'SHIFT_RACING_CHICKEN_INDEX',
    }
    expect(chickenReducer(startState, action).racingChickenIndex).to.equal(0);
  });

  it('should shift to next chickens ', function(){
    var action = {
      type:'SHIFT_RACING_CHICKEN_INDEX',
    }
    expect(chickenReducer(stateInRace, action).racingChickenIndex).to.equal(1);
  });
  it('should loop index back to first chicken', function(){
    var action = {
      type:'SHIFT_RACING_CHICKEN_INDEX',
    }
    expect(chickenReducer(stateLastChickenInRace, action).racingChickenIndex).to.equal(0);
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
    expect(chickenReducer(stateInRace, action).chickens).to.deep.equal(chickensAfterRace);
  });


})
