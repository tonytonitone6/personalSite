import { gql } from 'apollo-boost';

export const GET_MENUS = gql`
{
  menuList {
    id
    name
  }
}
`;