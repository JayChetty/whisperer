var React = require('react');
var Chicken = require('./Chicken.jsx');

var ChickenPen = React.createClass({
  render:function(){

    var chickenListItems = this.props.chickens.map((chicken,index)=>{
      var isRacingChicken = this.props.inRace && index === this.props.racingChickenIndex
      return(
      <Chicken
        chicken={chicken}
        key={chicken.id}
        onAttemptSteal={this.props.onAttemptSteal}
        lastAction ={this.props.lastAction}
        inRace ={this.props.inRace}
        isRacingChicken = { isRacingChicken}
      >
      </Chicken>
      )
    })
    return(
      <div className='panel column-panel panel-item-large'>
        {chickenListItems}
      </div>
    )
  }
});

module.exports = ChickenPen;
