var React = require('react');
var StepBox = React.createClass({
  render:function(){
    return(
      <div className="__midnight-blue">
        <p> Steps: {this.props.steps} </p>
      </div>
    )
  }
});

module.exports = StepBox;
