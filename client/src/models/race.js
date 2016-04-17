var _ = require('lodash');
var Race = function(store){
  this.store = store
}

Race.prototype = {
  isEven:function(n) {
    return n % 2 == 0;
  },
  stepSuccess:function(diceRoll){
    return this.isEven(_.sum(diceRoll))
  },
  attemptRaceStep:function(diceRoll){
    if(this.stepSuccess(diceRoll)){
      this.store.dispatch({type:'INCREASE_RACING_CHICKEN_STEPS'});
    }

    this.store.dispatch({type:'SHIFT_RACING_CHICKEN_INDEX'});

  },

}

module.exports = Race;
