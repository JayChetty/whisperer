var React = require('react');
var ReactDOM = require('react-dom');
var CatchGame = require('./components/CatchGame.jsx');
var Redux = require('redux');
var startState = require('./start_state');

import reducer from './reducers/index'

var approachDispatcher = require('./action_dispatchers/approach_dispatcher')
var stepDispatcher = require('./action_dispatchers/step_dispatcher')
var stealDispatcher = require('./action_dispatchers/steal_dispatcher')
var raceDispatcher = require('./action_dispatchers/race_dispatcher')

var catchGameReducer = require('./reducers/catch_game_reducer.js');

var gameStore = Redux.createStore(reducer);
var gameStore = Redux.createStore(reducer,
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

console.log('gamestore state', gameStore.getState());

var render = function(){
  ReactDOM.render(
    <CatchGame
      game={ gameStore.getState().game }
      dice = {gameStore.getState().dice }
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
