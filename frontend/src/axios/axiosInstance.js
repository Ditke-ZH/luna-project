import axios from "axios";

const baseUrl = import.meta.env.VITE_API_BASEURL;
const token = localStorage.getItem("loginToke");

export const axiosLuna = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
});
