var _ = require('lodash');

var startState = {
  lastRoll:[]
}

export default function(state = startState, action){
  switch(action.type){
    case "SET_LAST_ROLL":
      return Object.assign( {}, state, { lastRoll: action.dice } )
    default:
      return state
  }
}
