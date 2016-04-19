var _ = require('lodash');
var Approach = function(store, checker, whisperer){
  this.store = store;
  this.checker = checker;
  this.whisperer = whisperer || false;
}

Approach.prototype = {
  shouldStartWhisperer:function(diceRoll){
    return !this.whisperer && diceRoll[0] === diceRoll[1];
  },
  shouldEndWhisperer:function(diceRoll){
   return this.whisperer && !this.checker.shouldStep(diceRoll);
  },
  attemptStep:function(diceRoll){
    //check if needs to trigger whisperer
    if(this.shouldStartWhisperer(diceRoll)){
      this.store.dispatch({type:'SET_WHISPERER_ON'});
    }
    if(this.shouldEndWhisperer(diceRoll)){
      this.store.dispatch({type:'SET_WHISPERER_OFF'});
    }
    //check if should step or scare
    if(this.checker.shouldStep(diceRoll)){
      this.store.dispatch({type:'APPROACH_STEP'});
    }else{
      this.store.dispatch({type:'SCARE_CHICKENS'});
    }
  },
  attemptSteal:function(diceRoll, chicken){
    var chickenId = null;
    if(this.checker.shouldSteal(diceRoll, chicken)){
      chickenId = chicken.id
    }
    this.store.dispatch({type:'STEAL_CHICKEN', chickenId:chickenId });
  },

  // shouldTriggerWhisperer(diceRoll){
  //   return(diceRoll[0] === diceRoll[1])
  // },
  // triggerWhisperer(){
  //   this.whisperer = true;
  // },

}

module.exports = Approach;
