import axios from "axios";

const baseUrl = import.meta.env.VITE_API_BASEURL;
const token = localStorage.getItem("accessToken");

console.log(baseUrl)

export const axiosMotion = axios.create({
  baseURL: baseUrl,
  headers: {
    // Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});
