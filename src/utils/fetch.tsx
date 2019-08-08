import { gql } from 'apollo-boost';

export const GET_MENUS = gql`
{
  menuList {
    id
    name
  }
}
`;


// export const loadMenu = async () => {
//   const { data } = useQuery(GET_MENUS);

//   console.log(data);;
  

//   return [];

//   // const { data: { menuList } } = await client.query({query, fetchPolicy: 'no-cache'});

//   // return menuList;

// }