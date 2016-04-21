var React = require('react');
var Catcher = require('./Catcher.jsx');
var CatchersBox = React.createClass({
  render:function(){
    var catcherListItems = this.props.catchers.map(function(catcher){
      return <Catcher key={catcher.id} catcher={catcher}></Catcher>
    })
    return(
      <div className='box'>
        <h2> CatchersBox </h2>
        <ul> {catcherListItems}</ul>
      </div>
    )
  }
});

module.exports = CatchersBox;
