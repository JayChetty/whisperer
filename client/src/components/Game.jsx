var React = require('react');
var CatchGame = require('./CatchGame.jsx');
var RaceGame = require('./RaceGame.jsx')
var Game = React.createClass({
  render:function(){
    var allChickensCaught = _.every(this.props.game.chickens, (chicken)=>{
      return( !!chicken.owner );
    })
    if(false){//removing race game for now
      var gameComponent = (
        <RaceGame
          game = { this.props.game }
          onRaceChicken = {this.props.onRaceChicken}
        >
        </RaceGame>
      )
    } else{
      var gameComponent = (
        <CatchGame
          game = { this.props.game }
          onNextApproach = {this.props.onNextApproach}
          onStep = {this.props.onStep}
          onAttemptSteal = {this.props.onAttemptSteal}
          inRace = {allChickensCaught}
          onRaceChicken = {this.props.onRaceChicken}
        >
        </CatchGame>
      )
    }
    return(
      <div>
        { gameComponent }
      </div>
    )
  }
});

module.exports = Game;
