import axios from 'axios';

export default () => {
  return axios({
    method: 'get',
    url: 'https://jsonplaceholder.typicode.com/users',
    responseType: 'json'
  }).then((data) => data.data);
} 