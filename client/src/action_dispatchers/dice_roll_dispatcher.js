export default function diceRollDispatcher(store, numDice){
  const dice = []
  for (var i = 0; i < numDice; i++) {
    dice.push(_.random(1,6));
  }
  store.dispatch({
    type:'SET_LAST_ROLL',
    dice:dice
  })
  return dice;
}
