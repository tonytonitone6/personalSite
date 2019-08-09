import types from '@reducers/constants';


export const menuReducer = (state: any, action: any): any => {  
  switch (action.type) {
    case types.SET_MENU:
      return {...state, ...action.payload};
      break;
    case types.FETCH_MENU:
      return {...state};
    default:
      return state;
  }
}