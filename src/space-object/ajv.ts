import Ajv from 'ajv'

const ajv = new Ajv()

const string = { type: 'string' }

const number = { type: 'number' }

const bool = { type: 'boolean' }

const Vector = {
  type: 'array',
  items: [number, number, number],
  minItems: 3
}

const Asteroid = {
  type: 'object',
  properties: {
    type: {
      type: 'string',
      enum: ['asteroid']
    },
    location: Vector,
    mass: number
  },
  required: ['type', 'location', 'mass']
}

const Planet = {
  type: 'object',
  properties: {
    type: {
      type: 'string',
      enum: ['planet']
    },
    location: Vector,
    mass: number,
    population: number,
    habitable: bool
  },
  required: ['type', 'location', 'mass', 'population', 'habitable']
}

const Rank = {
  type: 'string',
  enum: ['captain', 'first mate', 'officer', 'ensign']
}

const CrewMember = {
  type: 'object',
  properties: {
    name: string,
    age: number,
    rank: Rank,
    home: Planet
  },
  required: ['name', 'age', 'rank', 'home']
}

const Ship = {
  type: 'object',
  properties: {
    type: {
      type: 'string',
      enum: ['ship']
    },
    location: Vector,
    mass: number,
    name: string,
    crew: {
      type: 'array',
      items: CrewMember
    }
  },
  required: ['type', 'location', 'mass', 'name', 'crew']
}

const schema = {
  anyOf: [Asteroid, Planet, Ship]
}

export const validateJSON = ajv.compile(schema)
