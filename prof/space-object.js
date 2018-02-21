const Benchmark = require('benchmark')
const { SpaceObjectIots } = require('../lib/space-object/io-ts')

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

suite
  .add('io-ts', function() {
    SpaceObjectIots.decode(input)
  })
  .on('cycle', function(event) {
    console.log(String(event.target))
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({ async: true })
