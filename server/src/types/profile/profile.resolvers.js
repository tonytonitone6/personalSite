import get from 'lodash/get'
import pick from 'lodash/pick'
import {AuthenticationError} from 'apollo-server'

import models from '../../models'
const Profile = models.get('Profile')

const getData = (args, field) => get(args.input, field)
const filterFields = (list, condition) => pick(list, condition)

const productsTypeMatcher = {
  FRONT_END: 'front',
  BACK_END: 'back',
  DATA_BASE: 'database',
}

const newProfile = async (_, args, ctx) => {
  const fields = ['_id', 'skills', 'updatedAt', 'createdAt']

  const receivedData = {
    [productsTypeMatcher[args.input.type]]: [
      {
        type: getData(args, 'type'),
        name: getData(args, 'name'),
        score: getData(args, 'score'),
      },
    ],
  }

  const profiles = await Profile.create({skills: {...receivedData}})

  return filterFields(profiles, fields)
}

const updatedProfile = async (_, {input: {_id, ...receivedData}}, ctx) => {
  const fields = ['_id', 'skills', 'createdAt', 'updatedAt']
  const profile = await Profile.findById({_id}).lean()

  const ignoreData = profile.skills[
    productsTypeMatcher[receivedData.type]
  ].filter(item => item.name !== receivedData.name)

  const skills = {
    [productsTypeMatcher[receivedData.type]]: [...ignoreData, receivedData],
  }

  const result = await Profile.findByIdAndUpdate(
    _id,
    {$set: {skills}},
    {new: true},
  )

  return filterFields(result, fields)
}

const profiles = async (parent, args, ctx) => {
  const allProfiles = await Profile.find({}).lean()
  return {
    skills: {
      front: [
        {
          name: 'REDUX',
          type: 'FRONT_END',
          score: 30,
        },
        {
          name: 'REACT',
          type: 'FRONT_END',
          score: 50,
        },
      ],
    },
  }
}

const profile = async (_, args, ctx) => {}

export default {
  Mutation: {
    newProfile,
    updatedProfile,
  },

  Query: {
    profiles,
    profile(parent, args, ctx) {
      console.log(parent, args, 'test')
    },
  },
}
