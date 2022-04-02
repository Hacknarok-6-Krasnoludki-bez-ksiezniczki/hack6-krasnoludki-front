import axios from 'axios';

// Back-end url
const BASE_URL = 'http://localhost:5000';

const apiClient = axios.create({
  baseURL: `${BASE_URL}/`,
});

export { BASE_URL, apiClient };
