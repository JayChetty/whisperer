function shouldStartWhisperer:function(diceRoll){
  return !this.whisperer && diceRoll[0] === diceRoll[1];
},
function shouldEndWhisperer:function(diceRoll){
 return this.whisperer && !this.checker.shouldStep(diceRoll);
},

function attemptStep (diceRoll, checker){
  //check if needs to trigger whisperer
  if(this.shouldStartWhisperer(diceRoll)){
    // this.store.dispatch({type:'SET_WHISPERER_ON'});
    return { type:'SET_WHISPERER_ON' }
  }
  if(this.shouldEndWhisperer(diceRoll)){
    // this.store.dispatch({type:'SET_WHISPERER_OFF'});
    return { type:'SET_WHISPERER_OFF' }
  }
  //check if should step or scare
  if(checker.shouldStep(diceRoll)){
    return { type:'APPROACH_STEP' }
  }else{
    return { type:'SCARE_CHICKENS' }
  }
},
