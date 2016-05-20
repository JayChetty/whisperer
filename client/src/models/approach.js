var _ = require('lodash');
// var Approach = function(store, checker, whisperer){
//   this.store = store;
//   this.checker = checker;
//   this.whisperer = whisperer || false;
// }

module.exports = {
  shouldStartWhisperer:function(diceRoll){
    return !this.whisperer && diceRoll[0] === diceRoll[1];
  },
  shouldEndWhisperer:function(diceRoll){
   return this.whisperer && !this.checker.shouldStep(diceRoll);
  },
  attemptStep:function(diceRoll, checker){
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
  attemptSteal:function(diceRoll, chicken){
    var chickenId = null;
    if(this.checker.shouldSteal(diceRoll, chicken)){
      chickenId = chicken.id
    }
    // this.store.dispatch({type:'STEAL_CHICKEN', chickenId:chickenId });
    return { type:'STEAL_CHICKENS', chickenId:chickenId }
  },
}
