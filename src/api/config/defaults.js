import axios from 'axios';

// Back-end url
const BASE_URL = 'http://localhost:8000';

const apiClient = axios.create({
  baseURL: `${BASE_URL}/api/`,
});

export { BASE_URL, apiClient };
