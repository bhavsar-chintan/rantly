import Axios from "axios";
import { setupCache } from "axios-cache-interceptor";

const axios = setupCache(Axios);

const API = axios.create({
  baseURL: "http://147.93.102.47:8000/api",
  timeout: 60000,
});
export default API;