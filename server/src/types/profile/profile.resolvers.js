import get from 'lodash/get';
import { AuthenticationError } from 'apollo-server';

import models from '../../models';
const Profile = models.get('Profile');

const getData = (args, field) => get(args.input, field);

const newProfile = async (_, args, ctx) => {  
  const data = {
    type: getData(args, 'type'),
    name: getData(args, 'name'),
    score: getData(args, 'score')
  };

  const result = await Profile.find({}).lean();
  if (result && result.length !== 0) {

  }

  // Profile.create({
  //   skill: [...data]
  // });
  const test = {
    skill: [{
      type: 'FRONT_END',
      name: 'REACT',
      score: 60
    }]
  };

  return test;

  };

const productsTypeMatcher = {
  FRONT_END: 'FRONT_END',
  BACK_END: 'BACK_END',
  DATA_BASE: 'DATA_BASE',
  TEST: 'TEST'
};

export default {
  Mutation: {
    newProfile
  }
}