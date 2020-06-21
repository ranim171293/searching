
// import { fromJS } from 'immutable';
export { USERS_LIST_FULFILLED } from './constant';

const initialState = ({
  list:[]
})



export default (state = initialState, action) => {
  switch (action.type) {
    case 'USERS_LIST_FULFILLED':
      return {
      list : action.payload,
      };
    default:
      return state
  }
}