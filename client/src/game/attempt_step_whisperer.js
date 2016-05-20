var diceChecker = require('./dice_checker');

function attemptStep(dice){
  return !diceChecker.containsNumber(dice,1)
}

module.exports = attemptStep;
