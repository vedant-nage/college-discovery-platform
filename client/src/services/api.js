import axios from "axios";

const API = axios.create({
 baseURL: "https://college-discovery-platform-udwz.onrender.com/api"
});

export default API;