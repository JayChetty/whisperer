var React = require('react');
var Catcher = React.createClass({
  render:function(){
    var classes = "catcher"
    if(this.props.isCurrentCatcher) classes += " current-catcher"
    return(
      <div className={classes}>
        {this.props.catcher.name}
      </div>
    )
  }
});

module.exports = Catcher;
