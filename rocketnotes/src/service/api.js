import axios from "axios";

export const api = axios.create({
  baseURL: "https://notes-backend-dff8.onrender.com",
}); 