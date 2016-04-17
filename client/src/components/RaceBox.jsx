var React = require('react');
var RacingChicken = require('./RacingChicken.jsx');
var RaceBox = React.createClass({
  render:function(){
    var chickenListItems = this.props.game.chickens.map((chicken)=>{
      return(
      <RacingChicken chicken={chicken} key={chicken.id}>
      </RacingChicken>
      )
    })
    return(
      <div>
        <h2> Race Box </h2>
        <ul> { chickenListItems }</ul>
      </div>
    )
  }
});

module.exports = RaceBox;
