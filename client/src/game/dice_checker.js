var _ = require('lodash');

module.exports = {
  numberIsEven:function(n) {
    return n % 2 === 0;
  },
  isEven:function(diceRoll){
    return this.numberIsEven(this.sum(diceRoll))
  },
  containsNumber:function(diceRoll, numberToCheck){
    return _.some(diceRoll, (number)=>{return number === numberToCheck});
  },
  isDouble:function(diceRoll){
    return diceRoll[0] === diceRoll[1]
  },
  sum:function(diceRoll){
    return _.sum(diceRoll)
  }
}
