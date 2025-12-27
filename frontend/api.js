import axios from "https://cdn.jsdelivr.net/npm/axios@1.6.8/+esm";

const BASE_URL = "http://localhost:5000/api";

const api = axios.create({
  baseURL: BASE_URL
});

// attach token
api.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// AUTH
export const AuthAPI = {
  signup: (data) => api.post("/auth/signup", data),
  login: (data) => api.post("/auth/login", data)
};

// DOCS
export const DocsAPI = {
  getAll: () => api.get("/docs"),
  create: (data) => api.post("/docs", data),
  delete: (id) => api.delete(`/docs/${id}`)
};

