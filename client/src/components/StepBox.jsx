var React = require('react');
var StepBox = React.createClass({
  render:function(){
    return(
      <div>
        <p> Steps: {this.props.steps} </p>
      </div>
    )
  }
});

module.exports = StepBox;
