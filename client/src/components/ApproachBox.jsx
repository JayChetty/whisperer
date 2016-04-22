var React = require('react');
var _ = require('lodash');
var DiceBox = require('./DiceBox.jsx');
var StepBox = require('./StepBox.jsx');
var CatchersBox = require('./CatchersBox.jsx');
var ActionBox = require('./ActionBox.jsx');

var ApproachBox = React.createClass({
  handleNextApproach:function(){
    this.props.onNextApproach();
  },
  render:function(){
    var currentCatcher = this.props.approach && !this.props.approach.finished && this.props.approach.catcher;
    var button = <button onClick={this.handleNextApproach}> Next Player Start Approach</button>

    if(this.props.approach && !this.props.approach.finished){
      var button = <button onClick ={ this.props.onStep }> Step </button>
    }

    return(
      <div className='panel column-panel panel-item-large '>
        <CatchersBox
          catchers={this.props.catchers}
          currentCatcher={currentCatcher}
        ></CatchersBox>
        <div className="panel-item-small panel panel-row">
          <StepBox steps={this.props.approach.steps}></StepBox>
        </div>
        <div className="panel-item-large panel panel-row padded-panel">
          <DiceBox dice={this.props.dice}></DiceBox>
        </div>
        <div className="panel-item-large panel panel-row padded-panel">
          { button }
        </div>
      </div>
    )
  }
});

module.exports = ApproachBox;
