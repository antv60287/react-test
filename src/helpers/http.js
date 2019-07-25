import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const http = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'Accept-Language': 'en'
  }
});

export default http;
