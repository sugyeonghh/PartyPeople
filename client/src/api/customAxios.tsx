import axios from 'axios';
axios.defaults.withCredentials = true;

const customAxios = axios.create({
  baseURL: 'https://7eb8-1-237-37-135.jp.ngrok.io',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export default customAxios;
