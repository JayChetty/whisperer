import diceRollDispatcher from'./dice_roll_dispatcher';
import raceMoveSuccess from'../game/race_move_success';
import createRaceAction from'../action_creators/create_race_action';

export default function raceDispatcher(store, chicken){
  const dice = diceRollDispatcher(store, 2);
  const moveSuccess = raceMoveSuccess(dice);
  const raceAction = createRaceAction(moveSuccess);
  store.dispatch(raceAction);
}
