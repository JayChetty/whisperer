var React = require('react');
var ActionBox = React.createClass({
  render:function(){
    return(
      <div className='action-box'>
        <h4> {this.props.lastAction}</h4>
        <p> Whisperer? - {this.props.isWhisperer.toString()}</p>
      </div>
    )
  }
});

module.exports = ActionBox;
