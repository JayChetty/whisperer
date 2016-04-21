var React = require('react');
var Chicken = React.createClass({
  handleAttemptSteal:function(){
    console.log('trying to steal chicken', this.props.chicken);
    this.props.onAttemptSteal(this.props.chicken);
  },
  render:function(){
    var ownerBox = <div></div>
    var attemptSteal = this.handleAttemptSteal
    if(this.props.chicken.owner){
      ownerBox = <div className="emphasise"> ( {this.props.chicken.owner} )</div>
      attemptSteal = function(){
        console.log('cannot steal stolen chickens')
      }
    }
    return(
      <li onClick={attemptSteal} >
        {this.props.chicken.name}
        Speed: {this.props.chicken.speed}
        Scare: {this.props.chicken.scare}
        {ownerBox}
      </li>
    )
  }
});

module.exports = Chicken;
