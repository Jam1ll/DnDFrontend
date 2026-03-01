import axios from "axios";

export const api = axios.create({
  baseURL: "https://localhost:7065/api/v1",
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    Expires: "0",
  },
});
