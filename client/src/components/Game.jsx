var React = require('react');
var CatchGame = require('./CatchGame.jsx');
var Game = React.createClass({
  render:function(){
    var allChickensCaught = _.every(this.props.game.chickens, (chicken)=>{
      return( !!chicken.owner );
    })
    return(
      <div>
        <CatchGame
          game = { this.props.game }
          dice = { this.props.dice }
          onNextApproach = {this.props.onNextApproach}
          onStep = {this.props.onStep}
          onAttemptSteal = {this.props.onAttemptSteal}
          inRace = {allChickensCaught}
          onRaceChicken = {this.props.onRaceChicken}
        >
        </CatchGame>
      </div>
    )
  }
});

module.exports = Game;
