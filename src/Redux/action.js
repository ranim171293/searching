import {fetchArticleDetails, ListOfUser} from '../service/index';
import {USERS_LIST_FULFILLED} from '../Redux/Reducer/main'

export function searchPeople(user){
  return {
    type: searchPeople,
    payload: fetchArticleDetails(user)
  }
};

export function usersList(){
  return {
    type: USERS_LIST_FULFILLED,
    payload: ListOfUser().then(res => {
      return res.data;
    })
  }
};

// export const setData = data => ({
//   type: SET_DATA,
//   payload: { ...data },
// });