var React = require('react');

var ApproachBox = require('./ApproachBox.jsx');
var ChickenPen = require('./ChickenPen.jsx');

var CatchGame = React.createClass({
  render:function(){
    //add chickens to catchers
    this.props.game.catchers.forEach((catcher)=>{
      var chickens = _.filter(this.props.game.chickens, (chicken)=>{
        return(chicken.owner === catcher.id);
      })
      catcher.chickens = chickens;
    })
    var penChickens = _.filter(this.props.game.chickens, (chicken)=>{
      return( _.isNull(chicken.owner));
    })
    var catchableChickens = _.filter(penChickens, (chicken)=>{
      return(chicken.scare > 0);
    })
    return(
      <div className='catch-game-box'>
        <ApproachBox
          approach={this.props.game.currentApproach}
          onNextApproach={this.props.onNextApproach}
          onStep = {this.props.onStep}
          catchers = {this.props.game.catchers}
          dice = {this.props.game.dice}
        >
        </ApproachBox>
        <ChickenPen
          chickens={catchableChickens}
          onAttemptSteal = {this.props.onAttemptSteal}
        >
        </ChickenPen>

      </div>
    )
  }
});

module.exports = CatchGame;
