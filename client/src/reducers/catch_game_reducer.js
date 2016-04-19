var _ = require('lodash');
var startState = require('../start_state');


var catchGameReducer = function(state, action){
  switch(action.type){
    case "SET_LAST_ROLL":
      return Object.assign( {}, state, { dice: action.dice } )

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
      return Object.assign( {}, state, {currentApproach:{catcher: catcherId, steps: 0, finished:false}} )
    case "APPROACH_STEP":
      var currentSteps = state.currentApproach.steps
      var newApproach = Object.assign( {}, state.currentApproach, {steps: currentSteps+1})
      return Object.assign( {}, state, {currentApproach:newApproach} )
    case "SCARE_CHICKENS":
      var oldChickens = state.chickens
      var scaredChickens = state.chickens.map(function(chicken){
        return Object.assign( {}, chicken, {scare: chicken.scare - 1});
      })
      var catachableChickens = _.filter(scaredChickens, (chicken)=>{
        return _.isNull(chicken.owner)
      })
      var allScared = _.every(catachableChickens, (chicken)=>{
        return chicken.scare < 1
      })
      if(allScared){
        var finishedApproach = Object.assign( {}, state.currentApproach, {finished:true} )
        var replenishedChickens = state.chickens.map(function(chicken){
          return Object.assign( {}, chicken, {scare: chicken.startScare} );
        })
        return Object.assign( {}, state, {chickens:replenishedChickens, currentApproach:finishedApproach} )
      }
      return Object.assign( {}, state, {chickens:scaredChickens} )
    case "STEAL_CHICKEN":
      var oldChickens = state.chickens
      var chickensAfterSteal = state.chickens.map(function(chicken){
        var newOwner = chicken.owner
        if(chicken.id === action.chickenId){
          var newOwner = state.currentApproach.catcher
        }
        return Object.assign( {}, chicken, {owner: newOwner, scare: chicken.startScare} );
      })
      var updatedApproach = Object.assign( {}, state.currentApproach, {finished: true})
      return Object.assign( {}, state, {chickens:chickensAfterSteal, currentApproach:updatedApproach} )
    case "SHIFT_RACING_CHICKEN_INDEX":
      var racingChickenIndex = 0 //default to first chicken
      if(!_.isNull(state.racingChickenIndex)){
        var racingChickenIndex = (state.racingChickenIndex + 1) % state.chickens.length
      }
      return Object.assign( {}, state, {racingChickenIndex:racingChickenIndex} );
    case "INCREASE_RACING_CHICKEN_STEPS":
      var updatedChickens = state.chickens.map((chicken,index)=>{
        if(index === state.racingChickenIndex){
          return Object.assign( {}, chicken, {raceSteps: chicken.raceSteps + chicken.speed}  )
        }
        return Object.assign( {}, chicken )
      })
      return Object.assign( {}, state, {chickens: updatedChickens} );
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

module.exports = catchGameReducer;