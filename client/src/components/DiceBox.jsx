var React = require('react');
var DiceBox = React.createClass({
  render:function(){
    if(this.props.dice){
      var diceImages = this.props.dice.lastRoll.map((num, index)=>{
        var imageString = `images/die_face_${num}.png`
        return <img key={index} className='padded-image' src={imageString} height="32" width="32"></img>
      })
    }
    return(
      <div className="box">
        { diceImages }
      </div>
    )
  }
});

module.exports = DiceBox;
