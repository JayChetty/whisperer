var _ = require('lodash');
var Approach = function(store){
  this.store = store
}

Approach.prototype = {
  isEven:function(n) {
    return n % 2 == 0;
  },
  stepSuccess:function(diceRoll){
    return this.isEven(_.sum(diceRoll))
  },
  attemptStep:function(diceRoll){
    if(this.stepSuccess(diceRoll)){
      this.store.dispatch({type:'APPROACH_STEP'});
    }else{
      this.store.dispatch({type:'SCARE_CHICKENS'});
    }
  },
  attemptSteal:function(diceRoll, chicken){
    var chickenId = null;
    if(_.sum(diceRoll) >= chicken.speed){
      chickenId = chicken.id
    }
    this.store.dispatch({type:'STEAL_CHICKEN', chickenId:chickenId });
  }

}

module.exports = Approach;
