var React = require('react');
var _ = require('lodash');
var DiceBox = require('./DiceBox.jsx');
var ApproachBox = React.createClass({
  handleNextApproach:function(){
    this.props.onNextApproach();
  },
  render:function(){
    var approachEl = <button onClick={this.handleNextApproach}> Next Player Start Approach</button>
    if(this.props.approach && !this.props.approach.finished){
      var currentCatcher = _.find(this.props.catchers, (catcher)=>{
        return catcher.id === this.props.approach.catcher
      })
      approachEl = (
        <div>
          <p> Catcher: {currentCatcher.name} </p>
          <p> Steps: {this.props.approach.steps} </p>
          <p> Is Whisperer: {(!!this.props.approach.isWhisperer).toString()} </p>
          <button onClick ={ this.props.onStep }> Step </button>
          <DiceBox dice={this.props.dice}></DiceBox>
        </div>
      )
    }
    return(
      <div>
        <h2>ApproachBox</h2>
        { approachEl }
      </div>
    )
  }
});

module.exports = ApproachBox;
