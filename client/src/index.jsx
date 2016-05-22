import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import CatchGame from './components/CatchGame.jsx';

import reducer from './reducers/index'

import approachDispatcher from './action_dispatchers/approach_dispatcher'
import stepDispatcher from './action_dispatchers/step_dispatcher'
import stealDispatcher from './action_dispatchers/steal_dispatcher'
import raceDispatcher from './action_dispatchers/race_dispatcher'

const gameStore = createStore(reducer,
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

const render = function(){
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
