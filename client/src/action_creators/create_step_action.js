function attemptStep(success){
  if(success){
    return { type:'APPROACH_STEP' }
  }else{
    return { type:'SCARE_CHICKENS' }
  }
}

module.exports = attemptStep;
