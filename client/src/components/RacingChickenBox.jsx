var React = require('react');
var RacingChickingBox = React.createClass({
  render:function(){
    return(
      <div>
        <h2> {this.props.racingChicken.name} </h2>

        <button onClick={this.props.onRaceChicken}> Go Chicken Go </button>
      </div>
    )
  }
});

module.exports = RacingChickingBox;
