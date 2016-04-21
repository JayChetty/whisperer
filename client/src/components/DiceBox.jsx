var React = require('react');
var DiceBox = React.createClass({
  render:function(){
    if(this.props.dice){
      var diceImages = this.props.dice.map((num)=>{
        var imageString = `images/die_face_${num}.png`
        return <img src={imageString} height="20" width="20"></img>
      })
    }
    return(
      <div>
        { diceImages }
      </div>
    )
  }
});

module.exports = DiceBox;
