const Benchmark = require('benchmark')
const { SpaceObjectRuntypes } = require('../lib/space-object/runtypes')
const { SpaceObjectIots } = require('../lib/space-object/io-ts')
const { SpaceObjectTcombValidation, validate } = require('../lib/space-object/tcomb-validation')
const { SpaceObjectJoi } = require('../lib/space-object/joi')

const suite = new Benchmark.Suite()

const input = {
  type: 'ship',
  location: [1, 2, 3],
  mass: 4,
  name: 'foo',
  crew: [
    {
      name: 'bar',
      age: 44,
      rank: 'captain',
      home: {
        type: 'planet',
        location: [5, 6, 7],
        mass: 8,
        population: 1000,
        habitable: true
      }
    }
  ]
}

// console.log(SpaceObjectRuntypes.validate(input))
// console.log(SpaceObjectIots.decode(input))
// console.log(validate(input, SpaceObjectTcombValidation))
// console.log(SpaceObjectJoi.validate(input))

suite
  .add('runtypes', function() {
    SpaceObjectRuntypes.validate(input)
  })
  .add('io-ts', function() {
    SpaceObjectIots.decode(input)
  })
  .add('tcomb-validation', function() {
    validate(input, SpaceObjectTcombValidation)
  })
  .add('joi', function() {
    SpaceObjectJoi.validate(input)
  })
  .on('cycle', function(event) {
    console.log(String(event.target))
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({ async: true })
