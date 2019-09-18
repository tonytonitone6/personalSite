import _ from 'lodash'
import {Schema, model} from 'mongoose'

const schema = new Schema(
  {
    name: {
      type: String,
    },
    skills: {
      type: Schema.Types.Mixed,
    },
  },
  {timestamps: true, versionKey: false},
)

const ProfileModel = model('Profile', schema, 'profiles')

export default ProfileModel
