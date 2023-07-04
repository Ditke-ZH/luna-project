import axios from "axios";

const baseUrl = "http://localhost:5173";
const token = localStorage.getItem("accessToken");

export const axiosMotion = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});
