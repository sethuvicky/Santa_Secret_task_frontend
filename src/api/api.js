import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/secret-santa",
});

export default api;
