import {expect} from 'chai'
import approachReducer from '../../reducers/approach_reducer';

const startState = {
  catchers:[{ id:1, name:'Jay' },{ id:2, name:'Rick' }],
  currentApproach:null,
}

const stateWithApproach = Object.assign( {}, startState, {currentApproach:{catcher: 1, steps: 0, finished:false}} )
const stateWithFinishedApproach = Object.assign( {}, startState, {currentApproach:{catcher: 1, steps: 0, finished:true}} )
const stateWithFinishedApproachLast = Object.assign( {}, startState, {currentApproach:{catcher: 2, steps: 0, finished:true}} )

Object.freeze(startState);
Object.freeze(stateWithApproach);
Object.freeze(stateWithFinishedApproach);
Object.freeze(stateWithFinishedApproachLast);

describe("approach reducer", function(){
  it('should produce an approach', function(){
    var action = {
      type:'NEXT_APPROACH',
    }
    var expectedApproach = {catcher: 1, steps: 0}
    expect(approachReducer(startState, action).currentApproach).to.deep.equal({catcher: 1, steps: 0,finished:false, lastAction:null} );
  });
  it('should not produce an approach if approach not finished', function(){
    var action = {
      type:'NEXT_APPROACH',
      catcher:2
    }
    var expectedApproach = {catcher: 1, steps: 0, finished:false}
    expect(approachReducer(stateWithApproach, action).currentApproach).to.deep.equal(expectedApproach);
  });
  it('should assign next user to the next approach', function(){
    var action = {
      type:'NEXT_APPROACH',
      catcher:2
    }
    var expectedApproach = {catcher: 2, steps: 0, finished:false, lastAction:null}
    expect(approachReducer(stateWithFinishedApproach, action).currentApproach).to.deep.equal(expectedApproach);
  });
  it('should cycle back to first user when last done', function(){
    var action = {
      type:'NEXT_APPROACH',
      catcher:2
    }
    var expectedApproach = {catcher: 1, steps: 0, finished:false, lastAction:null}
    expect(approachReducer(stateWithFinishedApproachLast, action).currentApproach).to.deep.equal(expectedApproach);
  });

  it('should be able to end approach', function(){
    var action = {
      type:'FINISH_APPROACH',
    }
    var expectedApproach = {catcher: 1, steps: 0, finished:true}
    expect(approachReducer(stateWithApproach, action).currentApproach).to.deep.equal(expectedApproach);
  })

  it('should be able to take step', function(){
    var action = {
      type:'APPROACH_STEP',
    }
    var expectedApproach = {catcher: 1, steps: 1, finished:false, lastAction:"STEP"}
    expect(approachReducer(stateWithApproach, action).currentApproach).to.deep.equal(expectedApproach);
  });


  it('should set approach as whisperer ', function(){
    var action = {
      type:'SET_WHISPERER_ON',
    }
    expect(approachReducer(stateWithApproach, action).currentApproach.isWhisperer).to.equal(true);
  });

  it('should set approach as not whisperer ', function(){
    var action = {
      type:'SET_WHISPERER_OFF',
    }
    expect(approachReducer(stateWithApproach, action).currentApproach.isWhisperer).to.equal(false);
  });

})
