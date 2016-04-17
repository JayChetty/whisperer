var React = require('react');
var ReactDOM = require('react-dom');
var Game = require('./components/Game.jsx');
var Redux = require('redux');
var startState = require('./start_state');
var Approach = require('./models/approach');
var Race = require('./models/race');
var catchGameReducer = require('./reducers/catch_game_reducer.js');
var _ = require('lodash');


var gameStore = Redux.createStore(catchGameReducer, startState,
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

var approach = new Approach(gameStore);
var race = new Race(gameStore);

var rollDice = function(numDice){
  var dice = []
  for (var i = 0; i < numDice; i++) {
    dice.push(_.random(1,6));
  }
  console.log('dispatching dice', dice)
  gameStore.dispatch({
    type:'SET_LAST_ROLL',
    dice:dice
  })
  return dice;
}

var _ = require('lodash');
var render = function(){
  ReactDOM.render(
    <Game
      game={gameStore.getState()}
      onNextApproach = { function(){
        gameStore.dispatch({
          type:'NEXT_APPROACH',
          catcher:1
        })
      }}
      onStep = { function(){
        approach.attemptStep(rollDice(2))
      }}
      onAttemptSteal = { function(chicken){
        approach.attemptSteal(rollDice(gameStore.getState().currentApproach.steps), chicken)
      }}
      onRaceChicken= { function(chicken){
        // gameStore.dispatch({type:'INCREASE_RACING_CHICKEN_STEPS'});
        // gameStore.dispatch({type:'SHIFT_RACING_CHICKEN_INDEX'});
        race.attemptRaceStep(rollDice(2))
      }}
    >
    </Game>,
    document.getElementById('app')
  );
}

window.onload = function(){
  render();
}

gameStore.subscribe(render);
