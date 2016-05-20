function createRaceAction(success){
  if(success){
    return { type:'INCREASE_RACING_CHICKEN_STEPS' }
  }else{
    return { type:'SHIFT_RACING_CHICKEN_INDEX' }
  }
}

module.exports = createRaceAction;
