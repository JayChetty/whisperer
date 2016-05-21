var turnWhispererOn = require('../game/turn_whisperer_on');
var turnWhispererOff = require('../game/turn_whisperer_off');

var attemptStep = require('../game/attempt_step');
var attemptStepWhisperer = require('../game/attempt_step_whisperer');

var createStepAction = require('../action_creators/create_step_action');
var diceRollDispatcher = require('./dice_roll_dispatcher');

function whispererDispatcher(store, dice){
  if(!store.getState().game.currentApproach.isWhisperer){
    if(turnWhispererOn(dice)){
      const whispererAction = {type:'SET_WHISPERER_ON'};
      store.dispatch(whispererAction);
    }
  }
  else {
    if(turnWhispererOff(dice)){
      const whispererAction = {type:'SET_WHISPERER_OFF'};
      store.dispatch(whispererAction);
    }
  }
}

function stepDispatcher(store, dice){

  var shouldStep = false;
  if(store.getState().game.currentApproach.isWhisperer){
    shouldStep = attemptStepWhisperer(dice);
  }else{
    shouldStep = attemptStep(dice);
  }

  const stepAction = createStepAction(shouldStep);
  store.dispatch(stepAction)
}

function approachDispatcher(store){
  const dice = diceRollDispatcher(store, 2);
  whispererDispatcher(store, dice);
  stepDispatcher(store, dice);
}

module.exports = approachDispatcher;
