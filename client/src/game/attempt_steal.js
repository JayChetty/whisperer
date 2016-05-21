var diceChecker = require('./dice_checker');

function attemptSteal(target, dice){
  return diceChecker.sum(dice) > target;
}

module.exports = attemptSteal;
