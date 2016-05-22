import turnWhispererOn from '../game/turn_whisperer_on';
import turnWhispererOff from '../game/turn_whisperer_off';

import attemptStep from '../game/attempt_step';
import attemptStepWhisperer from '../game/attempt_step_whisperer';

import createStepAction from '../action_creators/create_step_action';
import diceRollDispatcher from './dice_roll_dispatcher';

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

export default function approachDispatcher(store){
  const dice = diceRollDispatcher(store, 2);
  whispererDispatcher(store, dice);
  stepDispatcher(store, dice);
}
