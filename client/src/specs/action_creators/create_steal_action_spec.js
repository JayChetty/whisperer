var createStealAction = require('../../action_creators/create_steal_action');
var expect = require('chai').expect;
var sinon = require('sinon');
var mockChicken = {
  id:1,
  name:"Mocky"
}
describe('create steal action', function(){
  it('should create STEAL_CHICKEN with chicken id when success', function(){
    expect(createStealAction(true,mockChicken)).to.deep.equal({type:'STEAL_CHICKENS',chickenId:1});
  });
  it('should create STEAL_CHICKEN with null chicken id when told', function(){
    expect(createStealAction(false,mockChicken)).to.deep.equal({type:'STEAL_CHICKENS',chickenId:null});
  });
})
