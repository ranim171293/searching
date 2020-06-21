import axios from 'axios';

export function fetchArticleDetails(username) {
  return axios.get(`https://api.github.com/search/users?q=${username}`)
    .then((res) => {
      console.log(res);
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