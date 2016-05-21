var _ = require('lodash');

const startState = {
  catchers:[{ id:1, name:'Jay' },{ id:2, name:'Rick' }],
  currentApproach:null,
}

export default function approachReducer(state = startState, action){
  switch(action.type){
    case "NEXT_APPROACH":
      if(state.currentApproach && !state.currentApproach.finished){return state}
      var catcherIds = state.catchers.map(function(catcher){return catcher.id});
      if(!state.currentApproach){
        var nextCatcherIndex = 0;
      }else{
        var currentIndex = _.indexOf(catcherIds, state.currentApproach.catcher);
        var nextCatcherIndex = (currentIndex + 1) % catcherIds.length;
      }
      var catcherId = catcherIds[nextCatcherIndex];
      return Object.assign( {}, state, {
        currentApproach:{catcher: catcherId, steps: 0, finished:false, lastAction:null}
      } )
    case "FINISH_APPROACH":
      var newApproach = Object.assign( {}, state.currentApproach, {finished: true})
      return Object.assign( {}, state, {currentApproach:newApproach} )
    case "APPROACH_STEP":
      var currentSteps = state.currentApproach.steps
      var newApproach = Object.assign( {}, state.currentApproach, {steps: currentSteps+1, lastAction:"STEP"})
      return Object.assign( {}, state, {currentApproach:newApproach} )
    case "SET_WHISPERER_ON":
      var newApproach = Object.assign( {}, state.currentApproach, {isWhisperer: true})
      return Object.assign( {}, state, {currentApproach:newApproach} )
    case "SET_WHISPERER_OFF":
      var newApproach = Object.assign( {}, state.currentApproach, {isWhisperer: false})
      return Object.assign( {}, state, {currentApproach:newApproach} )

    default:
      return state
  }
}
