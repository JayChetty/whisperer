var React = require('react');
var _ = require('lodash');
var DiceBox = require('./DiceBox.jsx');
var StepBox = require('./StepBox.jsx');
var CatchersBox = require('./CatchersBox.jsx');

var ApproachBox = React.createClass({

  render:function(){
    var currentCatcher = this.props.approach && !this.props.approach.finished && this.props.approach.catcher;
    var button = <button className="button" onClick={this.props.onNextApproach}> Next Player Start Approach</button>
    if(this.props.inRace){
      var button = <button  className="button" onClick ={ this.props.onRaceChicken }> Go! </button>
    }
    if(this.props.approach && !this.props.approach.finished){
      var button = <button className="button" onClick ={ this.props.onStep }> Step </button>
    }
    var stepClasses = "panel-item-small panel panel-row";
    var catcherClasses = "panel column-panel panel-item-large";
    if(this.props.inRace){
      console.log('inRACE YO')
      stepClasses = stepClasses += " __hidden"
      catcherClasses = catcherClasses += " __hidden"
    }

    console.log('catchers', catcherClasses);

    return(
      <div>
        <div className={catcherClasses}>
        <CatchersBox
          catchers={this.props.catchers}
          currentCatcher={currentCatcher}
        ></CatchersBox>
        </div>
        <div className={stepClasses}>
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
