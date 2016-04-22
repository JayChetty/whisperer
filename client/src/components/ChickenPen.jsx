var React = require('react');
var Chicken = require('./Chicken.jsx');

var ChickenPen = React.createClass({
  render:function(){
    var chickenListItems = this.props.chickens.map((chicken)=>{
      return(
      <Chicken
        chicken={chicken}
        key={chicken.id}
        onAttemptSteal={this.props.onAttemptSteal}
        lastAction ={this.props.lastAction}
      >
      </Chicken>
      )
    })
    return(
      <div className='panel column-panel panel-item-large'>
        {chickenListItems}
      </div>
    )
  }
});

module.exports = ChickenPen;
