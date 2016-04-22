module.exports = {
  catchers:[{ id:1, name:'Jay' },{ id:2, name:'Rick' }],
  chickens:[
    { id:1,
      name:'Susan',
      speed:6,
      scare:5,
      startScare:5,
      owner:1,
      raceSteps:0
    },
    {
      id:2,
      name:'Bob',
      speed:8,
      scare:4,
      startScare:4,
      owner:1,
      raceSteps:0
    },
    { id:3,
      name:'Chubby',
      speed:9,
      scare:2,
      startScare:2,
      owner:2,
      raceSteps:0
    },
    {
      id:4,
      name:'Maggie',
      speed:15,
      scare:1,
      startScare:1,
      owner:2,
      raceSteps:0
    }
  ],
  currentApproach:{catcher: 2, steps: 0, finished:true, lastAction:null},
  dice:[],
  racingChickenIndex:0,
}
