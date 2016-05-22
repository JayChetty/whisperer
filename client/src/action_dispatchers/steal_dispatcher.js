import attemptSteal from'../game/attempt_steal';
import createStealAction from'../action_creators/create_steal_action';
import diceRollDispatcher from'./dice_roll_dispatcher';

export default function stealDispatcher(store, chicken){
  const numDice = store.getState().game.currentApproach.steps;
  const dice = diceRollDispatcher(store, numDice);
  const stealSuccess = attemptSteal(chicken.speed, dice);
  const stealAction = createStealAction(stealSuccess,chicken);
  store.dispatch(stealAction);
}
