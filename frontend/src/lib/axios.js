import axios from "axios";


// in production, there's no localhost so we make this dynamic
const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" :"/api"
const api = axios.create({
    baseURL : BASE_URL,
})

// Optional: set up a global response interceptor
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 429) {
      error.isRateLimited = true;
    }
    return Promise.reject(error);
  }
);

export default api;