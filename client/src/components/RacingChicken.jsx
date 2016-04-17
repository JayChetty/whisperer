var React = require('react');
var Chicken = React.createClass({
  render:function(){
    return(
      <li>
        {this.props.chicken.name}
        Speed: {this.props.chicken.speed}
        Steps: {this.props.chicken.raceSteps}
      </li>
    )
  }
});

module.exports = Chicken;
