import axios from "axios";

const baseUrl = import.meta.env.VITE_API_BASEURL;
const token = localStorage.getItem("accessToken");

const instance = axios.create({
  baseURL: baseUrl,
});

if (token) {
  instance["headers"] = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
}

export const axiosLuna = instance;
