var React = require('react');
var Chicken = React.createClass({
  handleAttemptSteal:function(){
    console.log('trying to steal chicken', this.props.chicken);
    this.props.onAttemptSteal(this.props.chicken);
  },
  render:function(){
    return(
      <li onClick={this.handleAttemptSteal} >
        {this.props.chicken.name}
        Speed: {this.props.chicken.speed}
        Scare: {this.props.chicken.scare}
      </li>
    )
  }
});

module.exports = Chicken;
