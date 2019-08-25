import _ from 'lodash';
import { Schema, model } from 'mongoose';


const schema = new Schema({
  name: {
    type: String
  },
  skill: {
    type: Schema.Types.Mixed
  }
}, { timestamps: true });


const ProfileModel = model('Profile', schema, 'profiles');

export default ProfileModel;