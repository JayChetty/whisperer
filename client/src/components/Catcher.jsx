var React = require('react');
var Chicken = require('./Chicken.jsx');
var Catcher = React.createClass({
  render:function(){
    var attemptSteal = function(){
      window.alert('cannot steal chickens from each other.... yet')
    }
    var chickenListItems = this.props.catcher.chickens.map((chicken)=>{
      return(
      <Chicken chicken={chicken} key={chicken.id} onAttemptSteal={attemptSteal}>
      </Chicken>
      )
    })
    return(
      <div>
        <li>
          {this.props.catcher.name}
          <ul>
            { chickenListItems }
          </ul>
        </li>
      </div>
    )
  }
});

module.exports = Catcher;
