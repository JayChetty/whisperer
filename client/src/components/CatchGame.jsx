var React = require('react');

var ApproachBox = require('./ApproachBox.jsx');
var ChickenPen = require('./ChickenPen.jsx');

// var CatchGame = React.createClass({
const target = 20;
export default function CatchGame(props){
  //check to see if in race
  const inRace = props.game.chickens.every((chicken)=>{
    return chicken.owner
  })
  //add catcher to chicken
  //check if there is a winner
  let gameWon = false;
  let winningChicken = null;
  props.game.chickens.forEach((chicken)=>{
    var ownerObject = _.find(props.game.catchers, (catcher)=>{
      return catcher.id === chicken.owner
    });
    chicken.ownerObject = ownerObject
    if(chicken.raceSteps >= target){
      chicken.hasWon = true;
      gameWon = true;
      winningChicken = chicken;
    }
  })
  let infoBox = (
    <ApproachBox
      approach={props.game.currentApproach}
      onNextApproach={props.onNextApproach}
      onStep = {props.onStep}
      catchers = {props.game.catchers}
      dice = {props.dice}
      inRace = {inRace}
      onRaceChicken = {props.onRaceChicken}
    >
    </ApproachBox>
  )
  if(gameWon){
    infoBox = (
      <div className= 'panel-item-large'>
        <h4> {winningChicken.ownerObject.name} wins with {winningChicken.name} ! </h4>
      </div>
    )
  }
  return(

    <div className='panel column-panel'>
      <ChickenPen
        chickens={props.game.chickens}
        onAttemptSteal = {props.onAttemptSteal}
        lastAction={props.game.currentApproach.lastAction}
        inRace = {inRace}
        racingChickenIndex= {props.game.racingChickenIndex}
      >
      </ChickenPen>
      { infoBox }
    </div>
  )
}


// module.exports = CatchGame;
