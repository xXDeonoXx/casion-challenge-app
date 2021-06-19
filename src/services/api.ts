import axios from 'axios';
import App from '../../app.json';

const api = axios.create({
  baseURL: App.environments['local-emulator'].baseURL,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
});

export default api;
