import diceReducer from '../../reducers/dice_reducer'
import { expect } from 'chai'

describe('dice reducer', function(){
  it('should be able to set the last dice roll', function(){
    var action = {
      type:'SET_LAST_ROLL',
      dice:[1,2,3]
    }
    expect(diceReducer(null,action).lastRoll).to.deep.equal([1,2,3]);
  });
})
