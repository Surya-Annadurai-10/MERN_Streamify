import axios from "axios";

const testURL = import.meta.env.MODE ==="development" ? "http://localhost:8081/api" : "/api";
// const actualURL ="

export const axiosInstance = axios.create({
  baseURL: testURL, //   backend base URL
  withCredentials: true, // needed if using cookies
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000, 
});
