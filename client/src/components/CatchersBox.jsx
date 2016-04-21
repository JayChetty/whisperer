var React = require('react');
var Catcher = require('./Catcher.jsx');
var CatchersBox = React.createClass({
  render:function(){
    var catcherItems = this.props.catchers.map((catcher)=>{
      var isCurrentCatcher = catcher.id === this.props.currentCatcher
      return <Catcher
        key={catcher.id}
        catcher={catcher}
        isCurrentCatcher={isCurrentCatcher}>
      </Catcher>
    })
    return(
      <div className='box catchers-box'>
        {catcherItems}
      </div>
    )
  }
});

module.exports = CatchersBox;
