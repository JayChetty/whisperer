var React = require('react');
var Chicken = React.createClass({
  handleAttemptSteal:function(){
    console.log('trying to steal chicken', this.props.chicken);
    this.props.onAttemptSteal(this.props.chicken);
  },
  render:function(){
    var ownerBox = <div></div>
    var attemptSteal = this.handleAttemptSteal;
    if(this.props.chicken.owner){
      ownerBox = <div className="emphasise card-tag animated bounce"> {this.props.chicken.ownerObject.name}</div>
      attemptSteal = function(){
        console.log('cannot steal stolen chickens')
      }
    }

    var classesForImage = "";
    if(this.props.lastAction == "SCARE"){
      classesForImage = "animated shake"
    }

    if(this.props.chicken.scare === 0){
      var classesForCard = "card __card-gray __midnight-blue"
    }else{
      var classesForCard = "card __card-green __white"
    }
    var nameClasses = "";
    if(this.props.inRace){
      var chickenDetails = (<span className="__small-text __midnight-blue __block">
        Speed: {this.props.chicken.speed} |
        Distance: {this.props.chicken.raceSteps}
      </span>)
      if(this.props.isRacingChicken){
        nameClasses += " __gray"
      }
    }else{
      var chickenDetails = (<span className="__small-text __midnight-blue __block">
        Speed: {this.props.chicken.speed} |
        Scare: {this.props.chicken.scare}
      </span>)
    }
    return(
      <div className={classesForCard}>
        <div className="card-header">
          <div className= { classesForImage }>
            <img
              onClick={this.handleAttemptSteal}
              className='padded-image'
              src='images/chicken.png'
              height="32"
              width="32">
            </img>
          </div>
        </div>
        <div className="card-content __inline-block">
          <div className= {nameClasses}>
            {this.props.chicken.name}
          </div>
          {chickenDetails}
        </div>
        {ownerBox}
      </div>
    )
  }
});

module.exports = Chicken;
