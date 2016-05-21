function approachDispatcher(store){
  store.dispatch({
    type:'NEXT_APPROACH',
    catcher:1
  })
}

module.exports = approachDispatcher
