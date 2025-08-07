
import axios from "axios";

console.log('url',process.env.NEXT_PUBLIC_API_URL);


const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, 
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
