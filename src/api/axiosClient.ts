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

//wrapper de C#
export interface ApiResponse<T> {
  succeeded: boolean;
  message: string;
  errors: string[] | null;
  data: T;
}
