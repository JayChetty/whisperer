var React = require('react');
var ReactDOM = require('react-dom');
var Game = require('./components/Game.jsx');
var Redux = require('redux');
var startState = require('./race_state');

var approachDispatcher = require('./action_dispatchers/approach_dispatcher')
var stepDispatcher = require('./action_dispatchers/step_dispatcher')
var stealDispatcher = require('./action_dispatchers/steal_dispatcher')
var raceDispatcher = require('./action_dispatchers/race_dispatcher')

var catchGameReducer = require('./reducers/catch_game_reducer.js');

var gameStore = Redux.createStore(catchGameReducer, startState,
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

var render = function(){
  ReactDOM.render(
    <Game
      game={ gameStore.getState() }
      onNextApproach = { ()=> { approachDispatcher(gameStore) } }
      onStep = { ()=> { stepDispatcher(gameStore); } }
      onAttemptSteal = { (chicken)=> { stealDispatcher(gameStore, chicken); } }
      onRaceChicken= { (chicken)=> { raceDispatcher(gameStore, chicken); } }
    />,
    document.getElementById('app')
  );
}

gameStore.subscribe(render);

window.onload = render;
