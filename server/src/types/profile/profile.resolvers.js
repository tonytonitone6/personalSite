import { AuthenticationError } from 'apollo-server';


const newProfile = (_, args, ctx) => {

  const data = {
    front: [{
      type: 'FRONT_END',
      name: 'REACT',
      score: 60
    }]
  };

  return {...data};

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