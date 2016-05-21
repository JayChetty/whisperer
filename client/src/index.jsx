var React = require('react');
var ReactDOM = require('react-dom');
var Game = require('./components/Game.jsx');
var Redux = require('redux');
var startState = require('./start_state');

var turnWhispererOn = require('./game/turn_whisperer_on');
var turnWhispererOff = require('./game/turn_whisperer_off');

var attemptStep = require('./game/attempt_step');
var attemptStepWhisperer = require('./game/attempt_step_whisperer');

var attemptSteal = require('./game/attempt_steal');


var createStepAction = require('./action_creators/create_step_action')
var createStealAction = require('./action_creators/create_steal_action')

// var Approach = require('./models/approach');
// var StandardChecker = require('./models/standard_checker');
// var WhispererChecker = require('./models/whisperer_checker');

var Race = require('./models/race');
var catchGameReducer = require('./reducers/catch_game_reducer.js');
var _ = require('lodash');


var gameStore = Redux.createStore(catchGameReducer, startState,
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

// var approach = new Approach(gameStore);
var race = new Race(gameStore);

// var createApproach = function(approachState){
//   var isWhisperer = approachState.isWhisperer;
//   var checker = isWhisperer ? new WhispererChecker() : new StandardChecker()
//   return new Approach(gameStore, checker, isWhisperer);
// }

var rollDice = function(numDice){
  var dice = []
  for (var i = 0; i < numDice; i++) {
    dice.push(_.random(1,6));
  }
  gameStore.dispatch({
    type:'SET_LAST_ROLL',
    dice:dice
  })
  return dice;
}

var _ = require('lodash');
var render = function(){
  // var approachState = gameStore.getState().currentApproach
  // if(approachState){
  //   var approach = createApproach(approachState)
  // }
  ReactDOM.render(
    <Game
      game={ gameStore.getState() }
      onNextApproach = { function(){
        gameStore.dispatch({
          type:'NEXT_APPROACH',
          catcher:1
        })
      } }
      onStep = { function(){
        var dice = rollDice(2);
        //check trigger whisperer action
        if(!gameStore.getState().currentApproach.isWhisperer){
          if(turnWhispererOn(dice)){
            var whispererAction = {type:'SET_WHISPERER_ON'};
            gameStore.dispatch(whispererAction);
          }
        }
        else {
          if(turnWhispererOff(dice)){
            var whispererAction = {type:'SET_WHISPERER_OFF'};
            gameStore.dispatch(whispererAction);
          }
        }
        //dipatch the step action
        if(gameStore.getState().currentApproach.isWhisperer){
          var shouldStep = attemptStepWhisperer(dice);
        }else{
          var shouldStep = attemptStep(dice);
        }
        var stepAction = createStepAction(shouldStep);
        gameStore.dispatch(stepAction)
        }
      }

      onAttemptSteal = { function(chicken){
        console.log('chicken', chicken);
        // approach.attemptSteal(rollDice(gameStore.getState().currentApproach.steps), chicken)
        const numDice = gameStore.getState().currentApproach.steps;
        const dice = rollDice(numDice);
        const stealSuccess = attemptSteal(chicken.speed, dice);
        const stealAction = createStealAction(stealSuccess,chicken);
        console.log('stealAction', stealAction);
        gameStore.dispatch(stealAction);
      }}
      onRaceChicken= { function(chicken){
        // gameStore.dispatch({type:'INCREASE_RACING_CHICKEN_STEPS'});
        // gameStore.dispatch({type:'SHIFT_RACING_CHICKEN_INDEX'});

      }}
    />,
    document.getElementById('app')
  );
}

window.onload = function(){
  render();
}

gameStore.subscribe(render);
