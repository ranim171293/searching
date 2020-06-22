import { searchUserApi, ListOfUser, repoDetailsApi } from "../service/index";
import { USERS_LIST_FULFILLED, SEARCH_USER_FULFILLED, REPO_DETAILS_FULFILLED } from "../Redux/Reducer/constant";

export const searchPeople = user => dispatch => ({
    type: SEARCH_USER_FULFILLED,
    payload: searchUserApi(user).then(
      res => {
        const data = res.data.items || [];
        dispatch(fetchUserSuccess(data));
        return data;
      }
    ).catch(err => {
      dispatch(fetchUser);
      return true;
    }),
});

export const fetchUserSuccess = (payload) => ({
  type: USERS_LIST_FULFILLED,
  payload,
});

export const fetchUser = (dispatch) => {
  ListOfUser().then((res) => {
    dispatch(fetchUserSuccess(res.data));
    return res.data;
  });
};

export const fetchRepoDetails = payload  => ({
  type: REPO_DETAILS_FULFILLED,
  payload
})

export const repoDetails = url  => dispatch => {
  repoDetailsApi(url).then((res) => {
    dispatch(fetchRepoDetails(res.data));
   
    return res.data;
  })
}


// export const search = payload => ({
//   type: SEARCH_USER_FULFILLED,
//   payload,
// });

// export const searchPeople = _.debounce((user, dispatch) => {
// // if(user !== "") {
//   searchUserApi(user).then(
//     res => {
//       debugger
//       const data = res.data.items || [];
//       dispatch(search(data));
//       // return data;
//     }
//   ).catch(err => {
//     dispatch(fetch_user);
//     // console.log(err);
//   });
// // }
// }, 200);