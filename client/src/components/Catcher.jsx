var React = require('react');
var Catcher = React.createClass({
  render:function(){
    var classes = ""
    if(this.props.isCurrentCatcher) classes += " emphasise"
    return(
      <div className={classes}>
        {this.props.catcher.name}
      </div>
    )
  }
});

module.exports = Catcher;
