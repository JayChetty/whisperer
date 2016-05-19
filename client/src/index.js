var React = require('react');
var ReactDOM = require('react-dom');
var Game = require('./components/Game.jsx');
var Redux = require('redux');
var startState = require('./start_state');

var Approach = require('./models/approach');
var StandardChecker = require('./models/standard_checker');
var WhispererChecker = require('./models/whisperer_checker');

var Race = require('./models/race');
var catchGameReducer = require('./reducers/catch_game_reducer.js');
var _ = require('lodash');


var gameStore = Redux.createStore(catchGameReducer, startState,
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

var approach = new Approach(gameStore);
var race = new Race(gameStore);

var createApproach = function(approachState){
  var isWhisperer = approachState.isWhisperer;
  var checker = isWhisperer ? new WhispererChecker() : new StandardChecker()
  return new Approach(gameStore, checker, isWhisperer);
}

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
  var approachState = gameStore.getState().currentApproach
  if(approachState){
    var approach = createApproach(approachState)
  }
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
        var action = actions.attemptStep(rollDice(2))
        approach.attemptStep(rollDice(2))
      }}
      onAttemptSteal = { function(chicken){
        console.log('chicken', chicken);
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
