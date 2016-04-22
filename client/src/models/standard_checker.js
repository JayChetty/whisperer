var _ = require('lodash');
var StandardChecker = function(){
}

StandardChecker.prototype = {
  isEven:function(n) {
    return n % 2 == 0;
  },
  shouldStep:function(diceRoll){
    return this.isEven(_.sum(diceRoll))
  },
  shouldSteal:function(diceRoll, chicken){
    return _.sum(diceRoll) >= chicken.speed
  }

}

module.exports = StandardChecker;
