var diceChecker = require('./dice_checker');

function raceStep(dice){
  return diceChecker.isEven(dice)
}

module.exports = raceStep;
