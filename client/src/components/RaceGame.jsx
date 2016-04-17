var React = require('react');
var RaceBox = require('./RaceBox.jsx');
var RacingChickenBox = require('./RacingChickenBox.jsx');
var DiceBox = require('./DiceBox.jsx');
var Game = React.createClass({
  render:function(){
    var racingChicken = this.props.game.chickens[this.props.game.racingChickenIndex];
    return(
      <div>
        <RacingChickenBox racingChicken={racingChicken} onRaceChicken={this.props.onRaceChicken} >

        </RacingChickenBox>
        <DiceBox dice={this.props.game.dice}></DiceBox>
        <RaceBox game={this.props.game} ></RaceBox>
      </div>
    )
  }
});

module.exports = Game;
