var React = require('react');
var Chicken = require('./Chicken.jsx');

var ChickenPen = React.createClass({
  render:function(){
    var chickenListItems = this.props.chickens.map((chicken)=>{
      return(
      <Chicken chicken={chicken} key={chicken.id} onAttemptSteal={this.props.onAttemptSteal}>
      </Chicken>
      )
    })
    return(
      <div>
        <h2>ChickenPen</h2>
        <ul> {chickenListItems}</ul>
      </div>
    )
  }
});

module.exports = ChickenPen;
