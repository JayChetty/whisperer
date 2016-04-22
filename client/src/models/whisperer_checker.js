var _ = require('lodash');
var WhispererChecker = function(){
}

WhispererChecker.prototype = {
  isEven:function(n) {
    return n % 2 == 0;
  },
  shouldStep:function(diceRoll){
    var includesOne = _.some(diceRoll, (number)=>{return number === 1});
    return !includesOne
  },
  shouldSteal:function(diceRoll, chicken){
    return _.sum(diceRoll) >= chicken.speed
  }

}

module.exports = WhispererChecker;
