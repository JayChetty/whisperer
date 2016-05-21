var React = require('react');

var ApproachBox = require('./ApproachBox.jsx');
var ChickenPen = require('./ChickenPen.jsx');

var CatchGame = React.createClass({
  render:function(){
    //add catcher to chicken
    this.props.game.chickens.forEach((chicken)=>{
      var ownerObject = _.find(this.props.game.catchers, (catcher)=>{
        return catcher.id === chicken.owner
      });
      chicken.ownerObject = ownerObject
    })
    return(
      <div className='panel column-panel'>
        <ChickenPen
          chickens={this.props.game.chickens}
          onAttemptSteal = {this.props.onAttemptSteal}
          lastAction={this.props.game.currentApproach.lastAction}
          inRace = {this.props.inRace}
          racingChickenIndex= {this.props.game.racingChickenIndex}
        >
        </ChickenPen>
        <ApproachBox
          approach={this.props.game.currentApproach}
          onNextApproach={this.props.onNextApproach}
          onStep = {this.props.onStep}
          catchers = {this.props.game.catchers}
          dice = {this.props.dice}
          inRace = {this.props.inRace}
          onRaceChicken = {this.props.onRaceChicken}
        >
        </ApproachBox>

      </div>
    )
  }
});

module.exports = CatchGame;
