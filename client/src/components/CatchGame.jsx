var React = require('react');

var ApproachBox = require('./ApproachBox.jsx');
var ChickenPen = require('./ChickenPen.jsx');

// var CatchGame = React.createClass({
export default function CatchGame(props){
  //add catcher to chicken
  props.game.chickens.forEach((chicken)=>{
    var ownerObject = _.find(props.game.catchers, (catcher)=>{
      return catcher.id === chicken.owner
    });
    chicken.ownerObject = ownerObject
  })
  return(
    <div className='panel column-panel'>
      <ChickenPen
        chickens={props.game.chickens}
        onAttemptSteal = {props.onAttemptSteal}
        lastAction={props.game.currentApproach.lastAction}
        inRace = {props.inRace}
        racingChickenIndex= {props.game.racingChickenIndex}
      >
      </ChickenPen>
      <ApproachBox
        approach={props.game.currentApproach}
        onNextApproach={props.onNextApproach}
        onStep = {props.onStep}
        catchers = {props.game.catchers}
        dice = {props.dice}
        inRace = {props.inRace}
        onRaceChicken = {props.onRaceChicken}
      >
      </ApproachBox>

    </div>
  )
}


// module.exports = CatchGame;
