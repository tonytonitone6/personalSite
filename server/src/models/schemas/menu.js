import _ from 'lodash'
import {Schema, model} from 'mongoose'

const schema = new Schema({
  menuList: [
    {
      id: Number,
      name: String,
    },
  ],
})

const MenuModel = model('Menus', schema, 'menus')

export default MenuModel
