import axios from 'axios';

export default (id) => {
  return axios({
    method: 'get',
    url: `https://jsonplaceholder.typicode.com/todos?userId=${id}`,
    responseType: 'json'
  }).then((data) => data.data);
} 