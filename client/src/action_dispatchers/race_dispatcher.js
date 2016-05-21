var diceRollDispatcher = require('./dice_roll_dispatcher');
var raceMoveSuccess = require('../game/race_move_success');
var createRaceAction = require('../action_creators/create_race_action');

function raceDispatcher(store, chicken){
  const dice = diceRollDispatcher(store, 2);
  const moveSuccess = raceMoveSuccess(dice);
  const raceAction = createRaceAction(moveSuccess);
  store.dispatch(raceAction);
}

module.exports = raceDispatcher;
