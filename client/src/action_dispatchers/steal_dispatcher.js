var attemptSteal = require('../game/attempt_steal');
var createStealAction = require('../action_creators/create_steal_action');
var diceRollDispatcher = require('./dice_roll_dispatcher')

export default function stealDispatcher(store, chicken){
  const numDice = store.getState().game.currentApproach.steps;
  const dice = diceRollDispatcher(store, numDice);
  const stealSuccess = attemptSteal(chicken.speed, dice);
  const stealAction = createStealAction(stealSuccess,chicken);
  store.dispatch(stealAction);
}
