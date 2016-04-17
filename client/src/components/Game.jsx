var React = require('react');
var CatchGame = require('./CatchGame.jsx')
var Game = React.createClass({
  render:function(){
    return(
      <div>
        <CatchGame
          game = { this.props.game }
          onNextApproach = {this.props.onNextApproach}
          onStep = {this.props.onStep}
          onAttemptSteal = {this.props.onAttemptSteal}
        >
        </CatchGame>
      </div>
    )
  }
});

module.exports = Game;
