module.exports = {
  catchers:[{ id:1, name:'Jay' },{ id:2, name:'Valerie' }],
  chickens:[
    { id:1,
      name:'QuickChick',
      speed:1,
      scare:3,
      startScare:1,
      owner:null,
      raceSteps:0
    },
    {
      id:2,
      name:'SlowChick',
      speed:2,
      scare:4,
      startScare:4,
      owner:null,
      raceSteps:0
    }
  ],
  currentApproach:{catcher: 2, steps: 0, finished:true, lastAction:null},
  dice:[],
  racingChickenIndex:0,
}
