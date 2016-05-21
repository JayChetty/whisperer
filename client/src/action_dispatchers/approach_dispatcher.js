// function allScared(chickens){
//   _.every(catachableChickens, (chicken)=>{
//     return chicken.scare < 1
//   })
// }

function approachDispatcher(store){
  store.dispatch({
    type:'NEXT_APPROACH',
    catcher:1
  })
  // if allScared(store.getState().chickens.items){
  //   store.dispatch({
  //     type:'FINISH_APPROACH'
  //   })
  // }
}

module.exports = approachDispatcher
