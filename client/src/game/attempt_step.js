var diceChecker = require('./dice_checker');

function attemptStep(dice){
  return diceChecker.isEven(dice)
}

module.exports = attemptStep;
