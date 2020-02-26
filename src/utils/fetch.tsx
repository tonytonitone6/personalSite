import {gql} from 'apollo-boost'

const query = {
  GET_MENUS: gql`
    {
      menuList {
        id
        name
      }
    }
  `,
} as any

export default (tag: string) => {
  return query[tag]
}
