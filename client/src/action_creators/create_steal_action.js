export default function attemptSteal(success, chicken){
  var chickenId = null;
  if(success){
    chickenId = chicken.id
  }
  return { type:'STEAL_CHICKEN', chickenId:chickenId }
}
