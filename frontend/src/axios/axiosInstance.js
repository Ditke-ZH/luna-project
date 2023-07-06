import axios from "axios";

const baseUrl = import.meta.env.VITE_API_BASEURL;
//const token = localStorage.getItem("accessToken");
const testToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg4NzQxNTExLCJpYXQiOjE2ODg1Njg3MTEsImp0aSI6IjU0YWIzNjhjZDQ4NTQxNzU4ZmIxODgyNGFkN2RlZDI3IiwidXNlcl9pZCI6NX0.O6d3i1Zu5LjBNtaBbwXgSb7g4zRIW0M50Nsco1Db4_0";

export const axiosLuna = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: `Bearer ${testToken}`,
    "Content-Type": "application/json",
  },
});
