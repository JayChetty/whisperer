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
      console.log('oo', ownerObject)
      chicken.ownerObject = ownerObject
    })

    // var penChickens = _.filter(this.props.game.chickens, (chicken)=>{
    //   return( _.isNull(chicken.owner));
    // })
    var catchableChickens = _.filter(this.props.game.chickens, (chicken)=>{
      return(chicken.scare > 0);
    })
    return(
      <div className='panel'>
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
