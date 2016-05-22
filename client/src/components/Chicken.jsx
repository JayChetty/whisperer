var React = require('react');
var Chicken = React.createClass({
  getInitialState:function(){
    return({width:0})
  },
  handleAttemptSteal:function(){
    this.props.onAttemptSteal(this.props.chicken);
  },
  componentDidMount:function(){
    this.setState({width: this.refs.holder.offsetWidth})
  },
  distanceAlong:function(){
    let percentageAlong = this.props.chicken.raceSteps/this.props.target;
    percentageAlong = Math.min(percentageAlong,0.9)
    const distance = percentageAlong * this.state.width;
    return distance;
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

    let classesForImage = "";
    if(this.props.lastAction == "SCARE"){
      classesForImage = "animated shake"
    }
    if(this.props.chicken.hasWon){
      classesForImage= "animated tada"
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
    var imageStyle = { position: "relative", left:this.distanceAlong()}
    return(
      <div className={classesForCard} ref="holder">
        <div className="card-header">
          <div style={imageStyle}
              className= { classesForImage }
            >
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
