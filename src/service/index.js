import axios from 'axios';

export function searchUserApi(username) {
  return axios.get(`https://api.github.com/search/users?q=${username}`)
    .then((res) => {
      return res;
  }).catch(error => {
    console.log(error);
  });
}

export function ListOfUser() {
  return axios.get(`https://api.github.com/users`)
    .then((res) => {
      return res;
  }).catch(error => {
    console.log(error);
  });
}

export function repoDetailsApi(url) {
  return axios.get(url)
  .then(res =>{
    return res;
  }).catch(error => {
    return error;
  })
}
