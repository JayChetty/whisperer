var React = require('react');
var DiceBox = React.createClass({
  render:function(){
    var diceView = <p></p>
    if(this.props.dice){
      diceView = <p> {this.props.dice.toString()}</p>
    }
    return(
      <div>
        { diceView }
      </div>
    )
  }
});

module.exports = DiceBox;
