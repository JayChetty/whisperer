module.exports = {
  catchers:[{ id:1, name:'Jay' },{ id:2, name:'Valerie' }],
  chickens:[
    { id:1,
      name:'QuickChick',
      speed:6,
      scare:3,
      startScare:1,
      owner:1,
      raceSteps:0
    },
    {
      id:2,
      name:'SlowChick',
      speed:5,
      scare:4,
      startScare:4,
      owner:2,
      raceSteps:0
    }
  ],
  currentApproach:null,
  dice:[],
  racingChickenIndex:0,
}
