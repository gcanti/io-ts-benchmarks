import * as t from 'io-ts'

const Vector = t.tuple([t.number, t.number, t.number])

const Asteroid = t.type({
  type: t.literal('asteroid'),
  location: Vector,
  mass: t.number
})

const Planet = t.type({
  type: t.literal('planet'),
  location: Vector,
  mass: t.number,
  population: t.number,
  habitable: t.boolean
})

const Rank = t.keyof({
  captain: null,
  'first mate': null,
  officer: null,
  ensign: null
})

const CrewMember = t.type({
  name: t.string,
  age: t.number,
  rank: Rank,
  home: Planet
})

const Ship = t.type({
  type: t.literal('ship'),
  location: Vector,
  mass: t.number,
  name: t.string,
  crew: t.array(CrewMember)
})

export const SpaceObjectIots = t.taggedUnion('type', [Asteroid, Planet, Ship])
