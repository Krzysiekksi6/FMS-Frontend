import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.VITE_API_KEY,
});

export const axiosPrivate = axios.create({
  baseURL: import.meta.env.VITE_API_KEY,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
