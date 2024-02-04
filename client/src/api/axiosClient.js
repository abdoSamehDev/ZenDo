import axios from "axios";

const apiClient = axios.create({
  // baseURL: "http://localhost:4000",
  baseURL: "http://13.38.255.186:4000",
  headers: {
    "Content-Type": "application/json", // Common header
    Accept: "application/json", // Another common header
    // Add other default headers as needed
  },
});

export default apiClient;
