import { combineReducers } from 'redux'
// import approach from './approach_reducer'
// import chickens from './chicken_reducer'

import game from './catch_game_reducer'
import dice from './dice_reducer'

export default combineReducers({
  // approach,
  // chickens,
  game,
  dice
})
