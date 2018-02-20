import * as Joi from 'joi'

const Vector = Joi.array().ordered(Joi.number().required(), Joi.number().required(), Joi.number().required())

const Asteroid = Joi.object().keys({
  type: Joi.valid('asteroid').required(),
  location: Vector.required(),
  mass: Joi.number().required()
})

const Planet = Joi.object().keys({
  type: Joi.valid('planet').required(),
  location: Vector.required(),
  mass: Joi.number().required(),
  population: Joi.number().required(),
  habitable: Joi.boolean().required()
})

const Rank = Joi.valid('captain', 'first mate', 'officer', 'ensign')

const CrewMember = Joi.object().keys({
  name: Joi.string().required(),
  age: Joi.number().required(),
  rank: Rank.required(),
  home: Planet.required()
})

const Ship = Joi.object().keys({
  type: Joi.valid('ship').required(),
  location: Vector.required(),
  mass: Joi.number().required(),
  name: Joi.string().required(),
  crew: Joi.array()
    .items(CrewMember.required())
    .required()
})

export const SpaceObjectJoi = Joi.alternatives(Asteroid.required(), Planet.required(), Ship.required())
