var diceChecker = require('./dice_checker');

function turnWhispererOff(dice){
  return diceChecker.containsNumber(dice, 1);
}

module.exports = turnWhispererOff;
