function attemptSteal(success, chicken){
  var chickenId = null;
  if(success){
    chickenId = chicken.id
  }
  return { type:'STEAL_CHICKENS', chickenId:chickenId }
}

module.exports = attemptSteal;
