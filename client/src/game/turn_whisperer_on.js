var diceChecker = require('./dice_checker');

function turnWhispererOn(dice){
  return diceChecker.isDouble(dice)
}

module.exports = turnWhispererOn;
