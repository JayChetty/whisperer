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
    var approachBody =
      <button onClick={this.handleNextApproach}> Next Player Start Approach</button>
    var approachFooter = <div className="panel-item-small"></div>

    if(this.props.approach && !this.props.approach.finished){
      approachBody = (
        <div className="panel-item-large panel panel-row box">
          <ActionBox isWhisperer={!!this.props.approach.isWhisperer}>
          </ActionBox>
          <StepBox steps={this.props.approach.steps}></StepBox>
        </div>
      )
      approachFooter = (
        <div className="panel-item-small panel panel-row box">
          <button onClick ={ this.props.onStep }> Step </button>
          <DiceBox dice={this.props.dice}></DiceBox>
        </div>
      )
    }
    return(
      <div className='panel column-panel panel-item-large box'>
        <CatchersBox
          className="panel-item-small"
          catchers={this.props.catchers}
          currentCatcher={currentCatcher}
        ></CatchersBox>
        { approachBody }
        { approachFooter }
      </div>
    )
  }
});

module.exports = ApproachBox;
