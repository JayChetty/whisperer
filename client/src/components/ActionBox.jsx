var React = require('react');
var ActionBox = React.createClass({
  render:function(){
    return(
      <div className='action-box'>
        <h4> {this.props.lastAction}</h4>
      </div>
    )
  }
});

module.exports = ActionBox;
