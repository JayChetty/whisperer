var _ = require('lodash');

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

export default function(state = startState, action){
  switch(action.type){
    case "SCARE_CHICKENS":
      var oldChickens = state.chickens
      var scaredChickens = state.chickens.map(function(chicken){
        var scare = chicken.scare - 1;
        if(scare < 0 ) scare = 0;
        return Object.assign( {}, chicken, {scare: scare});
      })
      var catachableChickens = _.filter(scaredChickens, (chicken)=>{
        return _.isNull(chicken.owner)
      })
      var allScared = _.every(catachableChickens, (chicken)=>{
        return chicken.scare < 1
      })
      if(allScared){
        var finishedApproach = Object.assign( {}, state.currentApproach, {finished:true, lastAction:"SCARE"} )
        var replenishedChickens = state.chickens.map(function(chicken){
          return Object.assign( {}, chicken, {scare: chicken.startScare} );
        })
        return Object.assign( {}, state,
          {chickens:replenishedChickens, currentApproach:finishedApproach}
        )
      }else{
        var scaredApproach = Object.assign( {}, state.currentApproach, {lastAction:"SCARE"} )
        return Object.assign( {}, state, {chickens:scaredChickens, currentApproach:scaredApproach} )
      }
    case "STEAL_CHICKEN":
      var oldChickens = state.chickens
      var lastAction = "FAIL_STEAL"
      var chickensAfterSteal = state.chickens.map(function(chicken){
        var newOwner = chicken.owner
        if(chicken.id === action.chickenId){
          var newOwner = action.catcherId
          lastAction = "STEAL"
        }
        return Object.assign( {}, chicken, {owner: newOwner, scare: chicken.startScare} );
      })
      var updatedApproach = Object.assign( {}, state.currentApproach, {finished: true, lastAction:lastAction})
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
    default:
      return state
  }
}
